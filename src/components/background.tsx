import React from "react";

interface IBackground {
  numberOfCircles: number;
}

const Background = ({ numberOfCircles }: IBackground) => {
  // Create an array of empty <li> elements based on the numberOfCircles prop
  const circleElements = Array.from({ length: numberOfCircles }).map(
    (_, index) => <li key={index} data-testid="circle"></li>,
  );

  return (
    <div className="area z-0">
      <ul className="circles">{circleElements}</ul>
    </div>
  );
};

export default Background;
