import React from 'react'

const Weakness = ({detailedWeaknesses}) => {
  return (
    <div className="">
        <h1 className="text-3xl tracking-tight font-bold text-rose-500 mb-4">
          Weakness
        </h1>
        {detailedWeaknesses?.map((item, index) => (
          <p key={index} className="mx-3">
            <p className="text-md"> - {item}</p>
          </p>
        ))}
      </div>
  )
}

export default Weakness