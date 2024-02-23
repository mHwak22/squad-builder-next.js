import Image from "next/image";
import "./style.css";

interface Player {
  name: string;
  position: { x: number; y: number };
}

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: player.position.x,
        top: player.position.y,
        marginLeft: "21.2rem",
      }}
    >
      {/* ///Render cards dynamically//// */}
      <div
        className="default_card w-20 h-24 antialiased flex flex-col justify-center items-center rounded-md"
        onClick={() => console.log("clicked")}
      >
        {/* //Position/// */}
        <div className="absolute top-0 left-0 text-xs p-1 font-bold text-gray-800">
          <p>ST</p>
        </div>

        <div className="rounded-full bg-blue-600 text-center">
          <p className="text-3xl font-bold italic p-2 pr-4">UT</p>
        </div>
      </div>
      {/* Additional player card info */}
    </div>
  );
};

export default PlayerCard;
