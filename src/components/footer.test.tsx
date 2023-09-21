import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Footer from "./footer";

describe("Footer Component", () => {
  it("renders the correct text", () => {
    const { getByText } = render(<Footer />);

    const textElement = getByText(/Made with/);
    expect(textElement).toBeInstanceOf(HTMLElement);
  });

  it("contains a link to Isaac Johnson's LinkedIn profile", () => {
    const { getByRole } = render(<Footer />);

    const linkElement = getByRole("link", {
      name: /Isaac Johnson/,
    }) as HTMLAnchorElement;
    expect(linkElement.getAttribute("href")).toBe(
      "https://www.linkedin.com/in/isaac-johnson-a478abaa/",
    );
  });
});
