// import { useRef, useState } from "react";
// import { RiImageAddLine } from "react-icons/ri";
// import { FaFile } from "react-icons/fa";
// import {useNavigate} from "react-router-dom";
// const Form = () => {
//   const [file, setFile] = useState(null);
//   const [jd, setJd] = useState("");
//   const fileInputRef = useRef(null);
//   const navigate = useNavigate();

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log(file,jd)
//     const formData = new FormData();

//     formData.append("resume",file);
//     formData.append("jobDescription",jd.trim());

//     try{
//       const response = await fetch(`${import.meta.env.VITE_BACKEND_URL_DEV}/read`, {
//         method: "POST",
//         body:formData
//      });
//      if(!response.ok){
//       throw new Error("Network response was not ok")
//      }
//      const result = await response.json();
//      console.log(result);
//      navigate("/analyze",{state:{result}});
//     }catch(err){
//     alert("Error submitting resume",err);
//     }
//   };
//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col items-center justify-center"
//       >
//         {/* Input section for Resume */}
//         <div >
//           <div className="flex gap-x-4">
//             <input
//               type="file"
//               accept="image/*,application/pdf"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="hidden"
//               ref={fileInputRef}
//             />
//             <div className="cursor-pointer bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2" onClick={() => fileInputRef.current.click()}>
//               {file ? (
//                 <FaFile
//                   size={30}
//                 />
//               ) : (
//                 <RiImageAddLine
//                   size={30}
//                   onClick={() => fileInputRef.current.click()}
//                 />
//               )}

//               <span>{file ? file.name : "Choose a file"}</span>
//             </div>

//             {/* Textarea section for job description */}
//             <textarea
//               value={jd}
//               onChange={(e) => setJd(e.target.value)}
//               className="border p-2 rounded-lg w-full min-h-[40px] max-h-[200px] resize-y overflow-y-auto"
//               placeholder="Enter job description..."
//             />
//           </div>
//         </div>
//         <button type ="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import { useRef, useState } from "react";
import { RiUploadCloudLine } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jd.trim());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/read`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      navigate("/analyze", { state: { result } });
    } catch (err) {
      alert("Error submitting resume", err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-3 rounded-xl border border-zinc-200 shadow-sm bg-white"
    >
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-[30%_70%] gap-x-2 ">
          <div
            className=" cursor-pointer border border-dashed border-zinc-300 rounded-lg p-4 flex items-center justify-center hover:border-zinc-400 transition"
            onClick={() => fileInputRef.current.click()}
          >
            <input
              type="file"
              accept="application/pdf,image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
              ref={fileInputRef}
            />
            {file ? (
              <div className="flex items-center gap-3 text-left w-full">
                <FaFilePdf size={28} className="text-zinc-600 shrink-0" />
                <div className="flex flex-col truncate">
                  <p className="text-sm font-medium text-zinc-800 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {Math.round(file.size / 1024)} KB
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center space-y-1 ">
                <RiUploadCloudLine size={28} className="text-zinc-500" />
                <p className="text-sm text-zinc-600">Upload resume</p>
                <p className="text-xs text-zinc-500">
                  Browse your files by clicking here
                </p>
              </div>
            )}
          </div>

          {/* Job Description Input */}
          <textarea
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            className="flex-1 border border-zinc-300 rounded-lg p-3 resize-none text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-zinc-800"
            placeholder="Paste job description..."
            rows={5}
          />
        </div>
      </div>

      {/* Submit button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className=" bg-zinc-800 w-40 h-9 hover:bg-zinc-900 text-white text-sm font-medium px-6 py-2 rounded-md transition"
        >
          Analyze
        </button>
      </div>
    </form>
  );
};

export default Form;
