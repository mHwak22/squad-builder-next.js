import React from "react";
import PlayerCard from "./player/playerCard";
import Image from "next/image";
import field from "@/public/field.png";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";

interface Player {
  name: string;
  position: { x: number; y: number };
  role: string;
  // You can add more properties as needed
}

interface Formation {
  name: string;
  players: Player[];
}

const FootballField: React.FC<{ formation: Formation[] }> = ({ formation }) => {
  const { user } = useUser();

  const selectedFormation = useSelector(
    (state: any) => state.formation.formationState
  );

  //Selecting the formation and getting players array
  const formationName = formation.find(
    (form) => form.name === selectedFormation
  );
  const newFormation = formationName ? formationName.players : [];

  return (
    <div className="relative flex justify-start items-center">
      <Image
        style={{
          opacity: "90%",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,65,61,1) 0%, rgba(6,36,16,1) 100%)",
        }}
        width={950}
        src={field}
        alt="field"
        className="flex dark:bg-current pb-[3px]"
      />

      {newFormation.map((player, index) => (
        <PlayerCard key={index} player={player} uid={user?.id} />
      ))}
    </div>
  );
};

export default FootballField;
