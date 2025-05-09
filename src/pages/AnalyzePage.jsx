import { useEffect } from "react";
import { useState } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import MatchScore from "../components/MatchScore";
import Summary from "../components/Summary";
import Strengths from "../components/Strengths";
import Weakness from "../components/Weakness";
import Suggestions from "../components/Suggestions";
import Insights from "../components/Insights";
import KeyWordAnalysis from "../components/KeyWordAnalysis";

const AnalyzePage = () => {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const { result } = location.state || {};

  useEffect(() => {
    const fetchScore = async () => {
      // Validate result before proceeding
      setLoader(true);
      if (!result || !result.resumeText) {
        setError("Resume text is missing");
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            resumeText: result.resumeText, // Send only the specific string
            jobDescription: result.jobDescription, // Uncomment if backend still needs it
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setApiData(data.data);
        console.log("API Response:", data.data);
        console.log(apiData?.KeyWordAnalysis?.missingKeywords)
      } catch (err) {
        setError(err.message);
        console.error("Fetch Error:", err);
      } finally {
        setLoader(false);
      }
    };

    fetchScore();
  }, [result]);

  if (loader) {
    return <RiLoader2Fill className="animate-spin text-4xl text-blue-600" />;
  }
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-">
        <div className="max-w-7xl px-7 py-10 mx-auto font-poppins">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">Resume Analysis</h1>
              <div className="w-full bg-white px-6 py-8 md:px-10 md:py-12 font-poppins rounded-lg shadow-lg">
              <MatchScore score={apiData?.matchScore?.score} justification={apiData?.matchScore?.justification} />
              <div className="w-full h-0.5 bg-gradient-to-tr mt-4 mb-4 from-zinc-800/20 to-zinc-900"></div>
              <Summary summary ={apiData?.summary} />
              <div className="w-full h-0.5 bg-gradient-to-tr mt-4 mb-4 from-zinc-800/20 to-zinc-900"></div>
              <Strengths detailedStrengths={apiData?.detailedStrengths} />
              <div className="w-full h-0.5 bg-gradient-to-tr mt-4 mb-4 from-zinc-800/20 to-zinc-900"></div>
              <Weakness detailedWeaknesses = {apiData?.detailedWeaknesses} />
              <div className="w-full h-0.5 bg-gradient-to-tr mt-4 mb-4 from-zinc-800/20 to-zinc-900"></div>
              <Suggestions improvementSuggestions={apiData?.improvementSuggestions} />
              <div className="w-full h-0.5 bg-gradient-to-tr mt-4 mb-4 from-zinc-800/20 to-zinc-900"></div>
              <KeyWordAnalysis missingKeywords={apiData?.keywordAnalysis?.missingKeywords}
              matchingKeywords={apiData?.keywordAnalysis?.matchingKeywords} />
              <div className="w-full h-0.5 bg-gradient-to-tr mt-4 mb-4 from-zinc-800/20 to-zinc-900"></div>
              <Insights additionalInsights={apiData?.additionalInsights} />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyzePage;