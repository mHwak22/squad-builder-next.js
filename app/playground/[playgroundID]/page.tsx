"use client";

import React from "react";
import { Room } from "../Room";
import Live from "@/components/cursor/live";
import FootballField from "@/components/footballField";
import { formation442 } from "@/positions/formations";

const page = ({ params }: { params: { playgroundID: string } }) => {
  return (
    <Room roomId={params.playgroundID}>
      <div>
        <h1>My id : {params.playgroundID}</h1>
        <Live />
        <FootballField formation={formation442} />
      </div>
    </Room>
  );
};

export default page;
