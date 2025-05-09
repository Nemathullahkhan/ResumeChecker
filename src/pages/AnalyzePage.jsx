import { useEffect } from "react";
import { useState } from "react";
import { RiErrorWarningFill, RiLoader2Fill } from "react-icons/ri";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import MatchScore from "../components/MatchScore";
import Summary from "../components/Summary";
import Strengths from "../components/Strengths";
import Weakness from "../components/Weakness";
import Suggestions from "../components/Suggestions";
import Insights from "../components/Insights";
import KeyWordAnalysis from "../components/KeyWordAnalysis";
import {
  ArrowLeft,
  Briefcase,
  ClipboardList,
  FileText,
  Upload,
} from "lucide-react";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

const AnalyzePage = () => {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/analyze`, {
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
        console.log(apiData?.KeyWordAnalysis?.missingKeywords);
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
    return (
      <div className="min-h-screen items-center flex justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <RiErrorWarningFill className="text-4xl text-red-600" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-300 p-4">
      <div className="mb-10">
      <NavBar/>
      </div>
      <div className="max-w-7xl rounded-3xl px-4 py-8 mx-auto font-poppins sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4">
            {/* Left Side - Job Description Card */}
            <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg border border-zinc-700 hover:border-zinc-600 transition-colors">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-700 rounded-lg">
                    <Briefcase className="h-5 w-5 text-zinc-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    Job Description
                  </h2>
                </div>

                <div className="flex-1 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar border-b ">
                  <p className="text-zinc-300 text-sm whitespace-pre-line">
                    {result.jobDescription || "No job description provided."}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Analysis Results */}
            <div className="w-full bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-lg">
              <div className="space-y-8">
                <MatchScore
                  score={apiData?.matchScore?.score}
                  justification={apiData?.matchScore?.justification}
                />

                <Summary summary={apiData?.summary} />

                <Strengths detailedStrengths={apiData?.detailedStrengths} />

                <Weakness detailedWeaknesses={apiData?.detailedWeaknesses} />

                <Suggestions
                  improvementSuggestions={apiData?.improvementSuggestions}
                />

                <KeyWordAnalysis
                  missingKeywords={apiData?.keywordAnalysis?.missingKeywords}
                  matchingKeywords={apiData?.keywordAnalysis?.matchingKeywords}
                />

                <Insights additionalInsights={apiData?.additionalInsights} />
              </div>
            </div>
          </div>

          {/* Go Back Button (Centered) */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate("/")}
              className="w-full max-w-xs flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 hover:scale-105 transition-all text-white font-medium py-2.5 px-4 rounded-lg"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzePage;
