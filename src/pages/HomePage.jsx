import React from "react";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-300 p-4">
      <NavBar/>
      <div className="max-w-7xl px-7 py-14 mx-auto">
        <div className="space-y-12">
          {/* Hero Section  */}
          <section className="flex justify-center font-poppins">
            <div className="flex flex-col space-y-2">
              <h1 className="font-bold text-6xl tracking-tighter">
                Resume Checker
              </h1>
              <div className="w-40 h-1.5 flex justify-start bg-black relative left-0"></div>
              <p className="text-xl tracking-tighter">
                Get your resume score and know your chances to get selected in
                your dream job
              </p>
            </div>
          <Form />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
