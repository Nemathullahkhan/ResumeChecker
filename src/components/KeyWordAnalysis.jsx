import React from "react";

const KeyWordAnalysis = ({ missingKeywords, matchingKeywords }) => {
    console.log("missingKeywords:", missingKeywords);
  return (
    <div className="">
      <h1 className="text-3xl tracking-tight font-bold text-emerald-500 mb-4">
        KeyWordAnalysis
      </h1>
      {missingKeywords && (
        <h1 className="text-2xl tracking-tight font-bold text-rose-500 mb-4">
            Missing Keywords
          </h1>
      )}
      {missingKeywords?.map((item, index) => (
        <>
          
          <div key={index} className="mx-3">
            <p className="text-md">
              {" "}
              - {item.keyword} <span>Importance - {item.importance}</span>
            </p>
          </div>
        </>
      ))}

        {matchingKeywords && (
        <h1 className="text-2xl tracking-tight font-bold text-emerald-500 mb-4">
            Matching Keywords
          </h1>
      )}
       {matchingKeywords?.map((item, index) => (
        <>
          <div key={index} className="mx-3">
            <p className="text-md">
              {" "} - {item.keyword} 
            </p>
            <p className="text-sm">
                Context - {item.context}
            </p>
          </div>
        </>
      ))}
    </div>
  );
};

export default KeyWordAnalysis;
