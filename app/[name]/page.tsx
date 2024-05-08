"use client";

import { useEffect, useState } from "react";

const RoomPage = ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const socket = new WebSocket(`ws://localhost:8080/${name}`);

  useEffect(() => {
    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="flex items-center gap-x-2 mt-10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your message here"
          className="rounded-md p-2 bg-black border border-white"
        />
        <button
          onClick={() => {
            socket.send(input);
            setInput("");
          }}
          className="rounded-md p-2 bg-blue-500"
        >
          Send
        </button>
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-3xl mb-8 font-bold">Messages in this Room</h1>
        {messages.map((message, index) => (
          <div key={index} className="gap-y-2">
            {index + 1}). {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomPage;
