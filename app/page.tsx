"use client";

import { createUser } from "@/actions/user-action";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "@/redux/slices/user-slices";

export default function Home() {
  const dispatch = useDispatch();
  const { isLoaded, isSignedIn, user } = useUser();
  const newUser = useSelector((state: any) => {
    state.user;
  });
  // console.log("Redux state", newUser);

  useEffect(() => {
    async function generateUser() {
      if (user) {
        const { emailAddress, firstName } = user?.externalAccounts[0];
        const response = await createUser(emailAddress, firstName).then(
          (data) => {
            dispatch(saveUser(data));
            console.log("Redux state", data);
          }
        );

        // console.log("server response", response);
      }
    }
    generateUser();
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-2xl">Welcome to Ultimate Team</h1>
      <UserButton />
      {!isSignedIn && (
        <SignInButton mode="modal">
          <Button type="default">Enter UT</Button>
        </SignInButton>
      )}
    </div>
  );
}
