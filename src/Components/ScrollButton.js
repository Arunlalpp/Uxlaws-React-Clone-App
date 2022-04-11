import React, { useState, useEffect } from "react";

function ScrollButton() {
  const [scrollbutton, setScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollButton(true);
      } else {
        setScrollButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-scroll-button">
      {scrollbutton && (
      <button
        type="button"
      onClick={scrollUp}>
        <svg
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7l4-4m0 0l4 4m-4-4v18"
          ></path>
        </svg>
        <span class="scroll-btn">Back to Top</span>
      </button>
      )}
    </div>
  );
}

export default ScrollButton;
