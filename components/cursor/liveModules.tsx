"use client";

import {
  useBroadcastEvent,
  useEventListener,
  useMutation,
  useMyPresence,
  useStorage,
  useUpdateMyPresence,
} from "@/liveblocks.config";

import React, { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";

import { formations } from "@/positions/formations";

import { BaseUserMeta, User } from "@liveblocks/client";
import FootballField from "../footballField";
import FormationSelect from "../formationSelect";
import { Cursor } from "./cursor";
import SearchPlayer from "../player/searchPlayer";
import LiveChatWindow from "../liveChatWidnow";
import { Button, Input } from "antd";
import { connectionIdToColor } from "@/lib/utils";
import { Send } from "lucide-react";
import useInterval from "@/hooks/useInterval";

type Presence = any;
type LiveCursorProps = {
  others: readonly User<Presence, BaseUserMeta>[];
};

type Position = {
  x: number;
  y: number;
};

function LiveModules({ others }: LiveCursorProps) {
  const userCount = others.length;
  const updateMyPresence = useUpdateMyPresence();
  const { user } = useUser();
  const [keyState, setKeyState] = useState("Escape");
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const inputRef: any = useRef(null);
  const broadcast = useBroadcastEvent();
  // const broadcast = useBroadcastEvent();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    function oneKeyDown(event: KeyboardEvent) {
      if (event.key === "/") {
        setKeyState(event.key);
      } else if (event.key === "Escape") {
        setKeyState(event.key);
      }
    }
    window.addEventListener("keydown", oneKeyDown);

    return () => {
      window.removeEventListener("keydown", oneKeyDown);
    };
  }, [inputRef.current]);

  //Funciton to update user presence when user type and send message
  async function handleSubmit(e: any) {
    e.preventDefault();
    // console.log();

    await updateMyPresence({ message: e.target[0].value });

    broadcast({
      // x: cursor?.x,
      // y: cursor?.y,
      value: e.target[0].value,
    });
  }

  ///Reseting the chat message////
  useInterval(async () => {
    await updateMyPresence({ message: "" });
  }, 12000);

  return (
    <div
      className="w-screen h-screen"
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
        updateMyPresence({ cursor: { x: e.clientX, y: e.clientY } });
      }}
      onPointerLeave={() => updateMyPresence({ cursor: null })}
    >
      {/* <h1>Total users: {userCount}</h1> */}

      {keyState === "/" && (
        <form onSubmit={handleSubmit}>
          <div className="flex absolute z-50 mt-6">
            <Input
              ref={inputRef}
              placeholder="Say something...."
              className="rounded-lg text-xs p-2 caret-white text-white"
              style={{
                transform: `translateX(${position.x}px) translateY(${position.y}px)`,
                background: `rgb(63,94,251)`,
                color: "white",
              }}
            />
          </div>
        </form>
      )}

      {others.map(({ connectionId, presence }) =>
        presence.cursor ? (
          <Cursor
            key={connectionId}
            x={presence.cursor.x}
            y={presence.cursor.y}
            connectionId={connectionId}
            name={user?.fullName}
            keyState={keyState}
            others={others}
            presence={presence}
            updateMyPresence={updateMyPresence}
          />
        ) : null
      )}

      <div className="flex">
        <FootballField formation={formations} />

        {/* ///Side panel start here//// */}
        <aside className="absolute right-0 flex flex-col justify-center items-center mt-0 m-24 gap-8">
          <SearchPlayer />
          <FormationSelect />

          {/* ///Chat window///// */}
          {/* {keyState === "/" && (
            <LiveChatWindow
              message={message}
              setMessage={setMessage}
              updateMyPresence={updateMyPresence}
              others={others}
            />
          )} */}
        </aside>
      </div>
    </div>
  );
}

export default LiveModules;
