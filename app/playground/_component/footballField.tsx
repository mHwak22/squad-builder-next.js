import React from "react";
import PlayerCard from "./playerCard";
import Image from "next/image";
import field from "@/public/field.png";

interface Player {
  name: string;
  position: { x: number; y: number };
  // You can add more properties as needed
}

interface Formation {
  name: string;
  players: Player[];
}

const FootballField: React.FC<{ formation: Formation }> = ({ formation }) => {
  return (
    <div className="relative flex justify-start items-center">
      <Image
        src={field}
        alt="field"
        width={900}
        className="flex dark:bg-current"
      />

      {formation.players.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
};

export default FootballField;
