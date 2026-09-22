import { useEffect, useState } from "react";
import { fetchData } from "../data/userData";

const loadingDots = [".", "..", "...", "...."];

const Neofetch = () => {
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState(0);
  const [showFetch, setShowFetch] = useState(false);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev + 1) % loadingDots.length);
    }, 300);

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      clearInterval(dotInterval);
    }, 2000);

    const showDataTimeout = setTimeout(() => {
      setShowFetch(true);
    }, 2300);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(loadingTimeout);
      clearTimeout(showDataTimeout);
    };
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center px-2 sm:px-6 lg:px-8 pt-12 pb-24 min-h-screen text-foreground">
      <div className="w-full max-w-6xl backdrop-blur-sm rounded-2xl text-center flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <div className="text-lg sm:text-xl mb-6 text-center font-mono text-gray-800 dark:text-gray-200 animate-pulse">
            {loading ? `> neofetch${loadingDots[dots]}` : `> neofetch`}
          </div>

          {showFetch && (
            <div className="flex flex-col gap-3 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700/60 bg-white/10 dark:bg-black/10 font-mono text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl">
              {fetchData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700/60 last:border-none"
                >
                  <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">
                    {item.label}:
                  </span>
                  <span className="text-right text-green-600 dark:text-green-400 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Neofetch;
