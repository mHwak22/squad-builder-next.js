import React, { useEffect } from "react";
import LiveCursor from "./liveCursor";
import { useOthers } from "@/liveblocks.config";

const Live = () => {
  const others = useOthers();

  return (
    <div className="absolute z-50">
      <LiveCursor others={others} />
    </div>
  );
};

export default Live;
