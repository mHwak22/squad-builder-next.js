import React, { useEffect, useState } from "react";
import PlayerCard from "./player/playerCard";
import Image from "next/image";
import field from "@/public/field.png";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";
import { useEventListener, useOthers } from "@/liveblocks.config";
import { initFormation } from "@/positions/formations";
import Bench from "./bench";

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
  const [positionName, setPositionName] = useState<String>();
  const [formationState, setFormationState] = useState<Player[]>();
  // const others = useOthers();
  // console.log(formationState);
  const selectedFormation = useSelector(
    (state: any) => state.formation.formationState
  );

  useEventListener((eventData) => {
    if (eventData.event) {
      // Handle the "EMOJI" event
      console.log("Received EMOJI event:", eventData);
      setPositionName(eventData.event.formationNameValue);

      // Update state or perform any necessary actions based on the event
    }
  });

  //When useffect run whenever current user changes formation
  useEffect(() => {
    console.log("Reached");
    const formationName = formation.find(
      (form) => form.name === selectedFormation
    );
    setFormationState(
      formationName ? formationName.players : [...initFormation.players]
    );
  }, [selectedFormation]);

  useEffect(() => {
    //Selecting the formation and getting players array
    const formationName = formation.find(
      (form) =>
        //this will check if others users selected some formation
        form.name === positionName
    );
    setFormationState(
      formationName ? formationName.players : [...initFormation.players]
    );
  }, [positionName]);

  return (
    <div className="relative flex justify-start items-center ">
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

      {formationState?.map((player, index) => (
        <PlayerCard key={index} player={player} uid={user?.id} />
      ))}

      <div className="absolute bottom-0">
        <Bench />
      </div>
    </div>
  );
};

export default FootballField;
