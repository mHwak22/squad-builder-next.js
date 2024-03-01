import { Input } from "antd";
import React, { useState } from "react";
import { UserSearch } from "lucide-react";
import SearchModal from "./searchModal";
import { useOthers, useUpdateMyPresence } from "@/liveblocks.config";
import { connectionIdToColor } from "@/lib/utils";

const SearchPlayer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function handleClick(event: any) {
    // console.log(event.target.id);
    setModalOpen(true);
  }

  return (
    <>
      <div className="mt-24 flex gap-3 items-center">
        <UserSearch />
        <p
          // id="sp-1"
          className="border p-1 pl-2 cursor-pointer rounded-md text-sm"
          style={{ width: 220 }}
          onClick={(e) => handleClick(e)}
        >
          Search
        </p>
      </div>

      <SearchModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default SearchPlayer;
