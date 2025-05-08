import React, { useRef } from "react";
import { useState } from "react";

const Form = () => {
  const [jd, setJd] = useState("");
  const [file, setFile] = useState([]);
  const fileInputRef = useRef(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const readResume = await fetch("http://localhost:8000/read", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                jd,
                file,
            }),
        })
        const response = readResume.text();
        console.log(response);
    }catch(err){
      console.log(err);
    }
  };
  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-2"
      >
        <div className="flex ">
          <div className="flex">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              ref={fileInputRef}
              className="hidden"
            />
            <div
              onClick={() => fileInputRef.current.click()}
              className="cursor-pointer bg-blue-500 text-white p-3 rounded-lg text-center hover:bg-blue-600 transition flex items-center justify-center gap-2"
            >
              <svg
                className="w  w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <span>{file ? file.name : "Choose a file"}</span>
            </div>
          </div>

          <input
            type="text"
            value={jd}
            onChange={(e) => setJd(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
