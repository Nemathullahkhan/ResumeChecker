import React from 'react'
import { RiDivideLine } from 'react-icons/ri';

const Strengths = ({detailedStrengths}) => {
  return (
    <div className="">
        <h1 className="text-3xl tracking-tight font-bold text-emerald-500 mb-4">
          Strengths
        </h1>
        {detailedStrengths?.map((item, index) => (
          <RiDivideLine key={index} className="mx-3">
            <p className="text-md"> - {item}</p>
          </RiDivideLine>
        ))}
      </div>
  )
}

export default Strengths;