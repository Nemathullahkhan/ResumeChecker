import { CircleDot, NotepadText } from "lucide-react";
import React from "react";

const Summary = ({ summary }) => {
  return (
    <>
      <div className="">
        <h1 className="flex items-center text-3xl tracking-tight font-bold text-slate-800 mb-2">
          <NotepadText  className="mr-2 h-6 w-6 text-slate-800" />
          Summary
        </h1>
        <div className="bg-zinc-900/10 border border-purple-100 rounded-lg p-4">
        {summary?.map((item, index) => (
          <div key={index} className=" ml-4">
            <p className="text-md leading-relaxed flex items-center">
              <CircleDot className="mr-1 h-3 w-3 text-slate-800"/>  {item}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Summary;
