import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const BackToTop = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;

      const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercentage);

      if (scrollTop > 50) {
        setShowProgress(true);
      } else {
        setShowProgress(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowProgress(false);
  };

  return (
    <>
      {showProgress && (
        <div className="progress-wrap active-progress" onClick={handleScrollToTop}>
          <CircularProgressbar value={scrollPercentage} strokeWidth={4} />
          <div className="arrow-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V3.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 3.707V11.5A.5.5 0 0 0 8 12z"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default BackToTop;
