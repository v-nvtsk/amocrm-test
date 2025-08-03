import { render, screen } from "@testing-library/react";
import { PasswordStrengthVisualizer } from "./password-strength-visualizer";

describe("PasswordStrengthVisualizer", () => {
  test("red", () => {

    render(<PasswordStrengthVisualizer max={10} value={3} />);

    const progressBar = screen.getByRole("progressbar");

    expect(progressBar.getAttribute("style")).toBe("width: 30%; background-color: red;");

  });

  test("yellow", () => {

    render(<PasswordStrengthVisualizer max={10} value={5} />);

    const progressBar = screen.getByRole("progressbar");

    expect(progressBar.getAttribute("style")).toBe("width: 50%; background-color: yellow;");

  });

  test("green", () => {

    render(<PasswordStrengthVisualizer max={10} value={8} />);

    const progressBar = screen.getByRole("progressbar");

    expect(progressBar.getAttribute("style")).toBe("width: 80%; background-color: lightgreen;");
  });
});
