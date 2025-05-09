import { Lightbulb, SquareDot } from 'lucide-react'
import React from 'react'

const Suggestions = ({improvementSuggestions}) => {
  return (
    <div className="">
        <h1 className="flex items-center text-3xl tracking-tight font-bold text-slate-800 mb-4">
          <Lightbulb className='mr-2 h-6 w-6 text-amber-300' />
          Suggestions
        </h1>
        <div className="bg-yellow-500/20 border border-purple-100 rounded-lg p-4">
        {improvementSuggestions?.map((item, index) => (
          <p key={index} className="mx-3">
            <span className="flex items-center text-md"> 
              <SquareDot className="mr-1 h-5 w-5 text-amber-300" />
               {item}</span>
          </p>
        ))}
        </div>
      </div>
  )
}

export default Suggestions