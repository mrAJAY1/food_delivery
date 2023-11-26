import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("contact page test cases", () => {
  test("should load Contact Us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("should load input name inside Contact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    // Assertion
    expect(input).toBeInTheDocument();
  });

  test("should load  2 input boxes inside Contact component", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");

    // Assertion
    expect(inputs.length).toBe(2);
  });
});
