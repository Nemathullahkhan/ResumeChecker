import React from "react";

const MatchScore = ({ score, justification }) => {
  return (
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="text-slate-800 flex-1">
          <h1 className="text-3xl tracking-tight font-bold text-slate-800 mb-4">Match Score</h1>
          <p className="text-slate-800 text-sm">{justification}</p>
        </div>
        <div className="text-slate-800 flex justify-center  mr-10">
          <div className="font-bold rounded-full h-32 w-32 border-4 border-green-500 flex justify-center items-center">
            <span className="text-xl text-green-400">{score}</span>
            <span className="text-slate-800 ml-1">/100</span>
          </div>
        </div>
      </div>
  );
};

export default MatchScore;
