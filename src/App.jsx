import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AnalyzePage from "./pages/AnalyzePage";


function App() {
  return (
   <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/analyze" element={<AnalyzePage />}></Route>
   </Routes>
  );
}

export default App;
