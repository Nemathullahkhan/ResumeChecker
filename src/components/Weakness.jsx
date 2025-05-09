import { ShieldAlert, X } from "lucide-react";
import React from "react";

const Weakness = ({ detailedWeaknesses }) => {
  return (
    <div className="">
      <h1 className="flex items-center text-3xl tracking-tight font-bold text-rose-500 mb-4">
        <ShieldAlert className="mr-2 h-6 w-6 text-rose-500" />
        Weakness
      </h1>
      <div className="bg-rose-500/20 border border-purple-100 rounded-lg p-4">
        {detailedWeaknesses?.map((item, index) => (
          <p key={index} className="mx-3">
            <span className="flex items-center text-md">
              {" "}
              <X className="mr-1 h-5 w-5 text-rose-500" /> {item}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Weakness;
