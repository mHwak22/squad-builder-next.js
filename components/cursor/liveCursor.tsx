"use client";

import { useUpdateMyPresence } from "@/liveblocks.config";
import React from "react";
import { Cursor } from "./cursor";
import { BaseUserMeta, User } from "@liveblocks/client";

type Presence = any;

type LiveCursorProps = {
  others: readonly User<Presence, BaseUserMeta>[];
};

function LiveCursor({ others }: LiveCursorProps) {
  const userCount = others.length;
  const updateMyPresence = useUpdateMyPresence();

  return (
    <div
      className="w-screen h-screen"
      onPointerMove={(e) =>
        updateMyPresence({ cursor: { x: e.clientX, y: e.clientY } })
      }
      onPointerLeave={() => updateMyPresence({ cursor: null })}
    >
      <h1>Total users: {userCount}</h1>

      {others.map(({ connectionId, presence }) =>
        presence.cursor ? (
          <Cursor
            key={connectionId}
            x={presence.cursor.x}
            y={presence.cursor.y}
          />
        ) : null
      )}
    </div>
  );
}

export default LiveCursor;
