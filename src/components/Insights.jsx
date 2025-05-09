import {  DotIcon, SparkleIcon } from "lucide-react";
import React from "react";

const Insights = ({ additionalInsights }) => {
  return (
    <div className="">
      <h1 className="flex items-center text-3xl tracking-tight font-bold text-slate-800 mb-4">
        <SparkleIcon className="mr-2 h-6 w-6 text-slate-800" />
        Insights
      </h1>
      <div className=" border border-purple-100 rounded-lg px-1 py-4 shadow-md hover:scale-95  transition-all">
        {additionalInsights?.map((item, index) => (
          <div key={index} className="">
            <p className="flex gap-x-2 items-center text-md px-2"> <span className="text-3xl text-indigo-500">»</span> {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
