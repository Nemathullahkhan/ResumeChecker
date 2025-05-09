// import React from "react";

// const KeyWordAnalysis = ({ missingKeywords, matchingKeywords }) => {
//   return (
//     <div className="">
//       <h1 className="text-3xl tracking-tight font-bold text-emerald-500 mb-4">
//         KeyWordAnalysis
//       </h1>
//       {missingKeywords && (
//         <h1 className="text-2xl tracking-tight font-bold text-rose-500 mb-4">
//             Missing Keywords
//           </h1>
//       )}
//       {missingKeywords?.map((item, index) => (
//         <>
          
//           <div key={index} className="mx-3">
//             <p className="text-md">
//               {" "}
//               - {item.keyword} <span>Importance - {item.importance}</span>
//             </p>
//           </div>
//         </>
//       ))}

//         {matchingKeywords && (
//         <h1 className="text-2xl tracking-tight font-bold text-emerald-500 mb-4">
//             Matching Keywords
//           </h1>
//       )}
//        {matchingKeywords?.map((item, index) => (
//           <div key={index} className="mx-3">
//             <p className="text-md">
//               {" "} - {item.keyword} 
//             </p>
//             <p className="text-sm">
//                 Context - {item.context}
//             </p>
//           </div>
//       ))}
//     </div>
//   );
// };

// export default KeyWordAnalysis;


import { Check, X, Tag } from "lucide-react"

const KeyWordAnalysis = ({ missingKeywords, matchingKeywords }) => {
  if ((!missingKeywords || missingKeywords.length === 0) && (!matchingKeywords || matchingKeywords.length === 0)) {
    return null
  }

  return (
    <div>
      <h2 className="text-3xl tracking-tight font-bold text-slate-800 mb-3 flex items-center">
        <Tag className="mr-2 h-6 w-6 text-slate-500" />
        Keyword Analysis
      </h2>
      <div className="bg-slate-100/20 border border-purple-100 rounded-lg p-4  shadow-md hover:scale-105 transition-all">
      {matchingKeywords && matchingKeywords.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-emerald-600 mb-1 flex items-center">
            <Check className="mr-2 h-5 w-5" />
            Matching Keywords
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {matchingKeywords.map((item, index) => (
              <div key={index} className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
                <div className="font-medium text-emerald-700">{item.keyword}</div>
                {item.context && (
                  <div className="mt-1 text-sm text-slate-600">
                    <span className="font-medium">Context:</span> {item.context}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {missingKeywords && missingKeywords.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-rose-600 mb-1 flex items-center">
            <X className="mr-2 h-5 w-5" />
            Missing Keywords
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {missingKeywords.map((item, index) => (
              <div key={index} className="bg-rose-50 border border-rose-100 rounded-lg p-3">
                <div className="font-medium text-rose-700">{item.keyword}</div>
                {item.importance && (
                  <div className="mt-1 text-sm text-slate-600">
                    <span className="font-medium">Importance:</span> {item.importance}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default KeyWordAnalysis
