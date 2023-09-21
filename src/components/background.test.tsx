import React from "react";
import { render } from "@testing-library/react";
import Background from "./background";

describe("Background Component", () => {
  it("renders the correct number of circles", () => {
    const numberOfCircles = 5;
    const { getAllByTestId } = render(
      <Background numberOfCircles={numberOfCircles} />,
    );

    const circleElements = getAllByTestId("circle");
    expect(circleElements.length).toBe(numberOfCircles);
  });
});
