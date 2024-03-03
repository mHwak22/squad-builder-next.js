import Image from "next/image";
import React from "react";

const BenchCard = ({
  firstName,
  lastName,
  commonName,
  avatarUrl,
  position,
}: any) => {
  return (
    <div
      className="relative"
      // onMouseEnter={() => updateMyPresence({ playerSelectedId: uid })}
    >
      {/* <p>{player.name}</p> */}
      {/* ///Render cards dynamically//// */}
      <div
        className="default_card glow_card w-[84px] h-[100px] flex flex-col justify-center items-center rounded-md"
        onClick={() => console.log("clicked")}
      >
        {/* //Position/// */}
        <div className="absolute top-0 left-0 text-[9px] p-1 font-bold text-gray-800">
          <p>{position}</p>
        </div>

        <div className="rounded-full   text-center">
          <div>
            <img
              className="filter-none"
              src={avatarUrl}
              alt="img"
              width={60}
              height={60}
            />
          </div>
        </div>

        <div className="pt-2 text-black font-semibold text-xs">
          {commonName ? <p>{commonName}</p> : <p>{lastName}</p>}
        </div>
      </div>
      {/* Additional player card info */}
    </div>
  );
};

export default BenchCard;
