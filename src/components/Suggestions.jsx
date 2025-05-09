import React from 'react'

const Suggestions = ({improvementSuggestions}) => {
  return (
    <div className="">
        <h1 className="text-3xl tracking-tight font-bold text-slate-800 mb-4">
          Suggestions
        </h1>
        {improvementSuggestions?.map((item, index) => (
          <p key={index} className="mx-3">
            <p className="text-md"> - {item}</p>
          </p>
        ))}
      </div>
  )
}

export default Suggestions