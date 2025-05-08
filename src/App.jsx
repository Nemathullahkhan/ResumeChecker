import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-300 pb-16">
      <div className="max-w-7xl px-7 py-24 mx-auto">
        <div className="space-y-12">
          {/* Hero Section  */}
          <section className="flex   justify-center">
            <div className="flex flex-col items-center">
              <h1 className="font-bold font-poppins text-6xl tracking-tighter">
                Resume Checker
              </h1>
              <p className=" text-xl tracking-tighter font-poppins">
                Get your resume score and know your chances to get selected in
                your dream job
              </p>
            </div>
          </section>
          {/* Form section */}
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;
