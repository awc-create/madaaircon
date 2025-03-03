import React from "react";

const MockSlider = ({ children }) => {
  return (
    <div data-testid="mock-slider">
      <button data-testid="prev-button">◀</button>
      {children}
      <button data-testid="next-button">▶</button>
    </div>
  );
};

export default MockSlider;
