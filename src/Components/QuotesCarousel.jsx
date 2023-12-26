import quotes from "./../Quotes";
import React, { useEffect, useState } from "react";

const QuotesCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const getNextQuote = () => {
    if(activeSlide === 3) {
      setActiveSlide(1)
    } else {
      setActiveSlide(activeSlide + 1)
    }
  }

  const getPreviousQuote = () => {
    if(activeSlide === 1) {
      setActiveSlide(3)
    } else {
      setActiveSlide(activeSlide - 1)
    }
  }

  useEffect(() => {
    const cycleQuotes = () => {
      let current = 1;

      if (current === 3) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };

    const intervalId = setInterval(() => {
      cycleQuotes();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 grid-flow-col">
        <ul>
          {quotes.map((singleQuote, index) => {
            const { author, quote } = singleQuote;
            const count = index + 1;

            return (
              <li>
                {count === activeSlide ? (
                  <h3 className="font-sans text-base md:text-lg ld:text-xl italic transform translate-x-0 translate-y-0 transition-transform duration-2000">
                    {quote}
                    <p className="font-medium">- {author}</p>
                  </h3>
                ) : (
                  <h3 className="font-sans text-base md:text-lg ld:text-xl italic transform translate-x-0 translate-y-0 transition-transform hidden duration-200 ease-linear">
                    {quote}
                    <p className="font-medium">- {author}</p>
                  </h3>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative flex justify-end mt-auto mb-2">
        <button className="absolute left-0 drop-shadow-2xl" onClick={getPreviousQuote}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button className="absolute right-0 drop-shadow-2xl" onClick={getNextQuote}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuotesCarousel;
