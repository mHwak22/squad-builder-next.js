"use client";

import { useOthers, useUpdateMyPresence } from "@/liveblocks.config";
import React from "react";
import { OtherCursor } from "./_component/otherCursor";
import FootballField from "./_component/footballField";
import { formation442 } from "./_positions/formations";

function Playground() {
  const others = useOthers();
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
          <OtherCursor
            key={connectionId}
            x={presence.cursor.x}
            y={presence.cursor.y}
          />
        ) : null
      )}

      {/* //////Field components///// */}
      <FootballField formation={formation442} />
    </div>
  );
}

export default Playground;
