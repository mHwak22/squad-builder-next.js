"use client";

import { createRoom, getCookie } from "@/actions/user-action";
import { saveUser } from "@/redux/slices/user-slices";
import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  ///FETCHING COOKIE USING SERVER ACTION
  useEffect(() => {
    async function existingCookie() {
      const response = await getCookie().then((data) => {
        setLoggedUser((prevLoggedUser) => {
          // console.log("save data", prevLoggedUser); // Access previous state
          return data; // Return new state
        });
      });
    }

    async function getPlayers() {
      try {
        const response = await axios.get("/api/players");
        console.log(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    existingCookie();
    // getPlayers();
  }, []);

  //Creating room and playground dynamically
  async function createRoomRef(formData: FormData) {
    try {
      console.log(formData.get("rid"));
      formData.set("uid", loggedUser?.id);
      console.log(formData);

      const repsonse = await createRoom(formData).then((data) => {
        console.log(data);
        router.push(`/playground/${data?.roomID}`);
      });
    } catch (error) {}
  }

  return (
    <form action={createRoomRef}>
      <div className="flex justify-center items-center h-screen">
        <div className="flex gap-3">
          <Input placeholder="enter room number" name="rid" />
          <Button type="primary" htmlType="submit">
            Enter
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Home;
