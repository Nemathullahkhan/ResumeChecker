import { useRef, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { FaFile } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
const Form = () => {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(file,jd)
    const formData = new FormData();

    formData.append("resume",file);
    formData.append("jobDescription",jd.trim());


    try{
      const response = await fetch("http://localhost:8000/read", {
        method: "POST",
        body:formData
     });
     if(!response.ok){
      throw new Error("Network response was not ok")
     }
     const result = await response.json();
     console.log(result);
     navigate("/analyze",{state:{result}});
    }catch(err){
    alert("Error submitting resume",err);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        {/* Input section for Resume */}
        <div >
          <div className="flex gap-x-4">
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
              ref={fileInputRef}
            />
            <div className="cursor-pointer bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2" onClick={() => fileInputRef.current.click()}>
              {file ? (
                <FaFile
                  size={30}
                />
              ) : (
                <RiImageAddLine
                  size={30}
                  onClick={() => fileInputRef.current.click()}
                />
              )}

              <span>{file ? file.name : "Choose a file"}</span>
            </div>

            {/* Textarea section for job description */}
            <textarea
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              className="border p-2 rounded-lg w-full min-h-[40px] max-h-[200px] resize-y overflow-y-auto"
              placeholder="Enter job description..."
            />
          </div>
        </div>
        <button type ="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
