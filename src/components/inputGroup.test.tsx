import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import InputGroup from "./inputGroup";

describe("InputGroup", () => {
  it("renders label correctly", () => {
    render(<InputGroup label="Test Label" id="testId" name="testName" />);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("renders input element with correct attributes", () => {
    render(<InputGroup label="Test Label" id="testId" name="testName" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("id", "testId");
    expect(inputElement).toHaveAttribute("name", "testName");
    expect(inputElement).toHaveAttribute("type", "number");
  });
});
