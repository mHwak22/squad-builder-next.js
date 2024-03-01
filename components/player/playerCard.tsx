import Image from "next/image";
import "../style.css";
import { useUpdateMyPresence } from "@/liveblocks.config";

interface Player {
  name: string;
  position: { x: number; y: number };
  role: string;
}

const PlayerCard: React.FC<{ player: Player; uid: string }> = ({
  player,
  uid,
}) => {
  // const updateMyPresence = useUpdateMyPresence();

  return (
    <div
      // onMouseEnter={() => updateMyPresence({ playerSelectedId: uid })}
      style={{
        position: "absolute",
        left: player.position.x,
        top: player.position.y,
        marginLeft: "21rem",
        marginTop: "0.5rem",
      }}
    >
      {/* <p>{player.name}</p> */}
      {/* ///Render cards dynamically//// */}
      <div
        className="default_card glow_card w-20 h-24 flex flex-col justify-center items-center rounded-md"
        onClick={() => console.log("clicked")}
      >
        {/* //Position/// */}
        <div className="absolute top-0 left-0 text-xs p-1 font-bold text-gray-800">
          <p>{player.role}</p>
        </div>

        <div className="rounded-full bg-blue-600 text-center">
          <p className="text-2xl font-bold italic p-2 pr-4">UT</p>
        </div>
      </div>
      {/* Additional player card info */}
    </div>
  );
};

export default PlayerCard;
