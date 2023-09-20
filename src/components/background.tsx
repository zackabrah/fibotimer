import React from "react";

interface IBackground {
  numberOfCircles: number;
}

const Background = ({ numberOfCircles }: IBackground) => {
  // Create an array of empty <li> elements based on the numberOfCircles prop
  const circleElements = Array.from({ length: numberOfCircles }).map(
    (_, index) => <li key={index}></li>,
  );

  return (
    <div className="area">
      <ul className="circles">{circleElements}</ul>
    </div>
  );
};

export default Background;
