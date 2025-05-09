import React from "react";

const Summary = ({ summary }) => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl tracking-tight font-bold text-slate-800 mb-4">
          Summary
        </h1>
        {summary?.map((item, index) => (
          <div key={index} className="mx-3">
            <p className="text-md"> - {item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Summary;
