"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateRoomPage = () => {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <input
          placeholder="Enter Room Name"
          className="p-2 rounded-md bg-black border border-white h-[50px] w-[240px] text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => router.push(`/${name}`)}
          className="w-[240px] mx-2 bg-blue-500 p-2 rounded-md"
        >
          Create Room
        </button>
      </div>
    </div>
  );
};

export default CreateRoomPage;
