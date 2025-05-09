import { CircleCheck, X } from "lucide-react";

const MatchScore = ({ score, justification }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return "text-emerald-500 border-emerald-500";
    if (score >= 60) return "text-blue-500 border-blue-500";
    if (score >= 40) return "text-amber-500 border-amber-500";
    return "text-rose-500 border-rose-500";
  };

  const scoreColorClass = getScoreColor(score);

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6">
      <div className="flex-1">
        <h2 className="text-3xl tracking-tight font-bold text-slate-800 mb-2 flex items-center">
          {score >= 40 ? (
            <CircleCheck className={`mr-2 h-6 w-6 ${scoreColorClass}`} />
          ) : (
            <X className={`mr-2 h-6 w-6 ${scoreColorClass}`} />
          )}
          Match Score
        </h2>
        <div className=" border border-purple-100 hover:scale-105 transition-all rounded-lg px-1 py-4 shadow-md">
          <p className="text-slate-600 text-sm leading-relaxed ml-10">
            {justification}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className={`font-bold rounded-full h-28 w-28 border-4 ${scoreColorClass} flex flex-col justify-center items-center shadow-xl `}
        >
          <span className={`text-3xl ${scoreColorClass}`}>{score}</span>
          <span className="text-slate-500 text-sm">out of 100</span>
        </div>
      </div>
    </div>
  );
};

export default MatchScore;
