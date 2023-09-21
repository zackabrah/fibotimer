import "@testing-library/jest-dom";

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Index from "./index";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("Index", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  it("renders heading correctly", () => {
    render(<Index />);
    const headingElement = screen.getByText("FIBOTIMER");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders form inputs correctly", () => {
    render(<Index />);
    const timeInputLabel = screen.getByText("Time");
    const numberInputLabel = screen.getByText("Inital value");
    const submitButton = screen.getByRole("button", {
      name: "LET'S GET FIBBY!",
    });

    expect(timeInputLabel).toBeInTheDocument();
    expect(numberInputLabel).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
