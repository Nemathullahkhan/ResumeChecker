import { Check, ShieldCheck } from "lucide-react";
import React from "react";

const Strengths = ({detailedStrengths}) => {
  return (
    <div className="">
        <h1 className="flex items-center text-3xl tracking-tight font-bold text-emerald-500 mb-2">
          <ShieldCheck className="mr-2 h-6 w-6 text-emerald-500" />
          Strengths
        </h1>
        <div className="bg-emerald-500/20 border border-purple-100 rounded-lg p-4">
        {detailedStrengths?.map((item, index) => (
          <div key={index} className="mx-3">
            <p className="flex items-center text-md"> <Check className="mr-1 h-5 w-5 text-emerald-500"/> {item}</p>
          </div>
        ))}
        </div>
      </div>
  )
}

export default Strengths;