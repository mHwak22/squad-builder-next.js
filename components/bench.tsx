import React, { useEffect, useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { ArrowBigUpDashIcon } from "lucide-react";
import PlayerCard from "./player/playerCard";
import BenchCard from "./player/benchCard";
import { useSelector } from "react-redux";
import { useStorage } from "@/liveblocks.config";

const Bench: React.FC = () => {
  const [open, setOpen] = useState(false);
  const playerid = useSelector((state: any) => state.player.playerState);
  const players = useStorage((root) => root.players);
  console.log(players);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   const id = getCookie("playerId");
  //   setPid(id);
  // });

  return (
    <div>
      <div className="flex justify-center items-center">
        <Button
          icon={<ArrowBigUpDashIcon color="white" size={25} />}
          type="text"
          onClick={showDrawer}
        ></Button>
        <span
          onClick={showDrawer}
          className="text-sm text-white cursor-pointer"
        >
          open bench
        </span>
      </div>
      sdfdsf {playerid}
      <Drawer
        style={{
          backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
        }}
        height={300}
        title="Substitution Bench"
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="flex justify-start gap-3">
          {players?.map((item) => {
            return (
              <div key={item.id}>
                <BenchCard
                  firstName={item.firstName}
                  commonName={item.commonName}
                  lastName={item.lastName}
                  avatarUrl={item.avatarUrl}
                  position={item.position.shortLabel}
                />
              </div>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default Bench;
