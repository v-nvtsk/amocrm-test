import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PasswordInputField } from "./password-input-field";
import { vi } from "vitest";

describe("PasswordInputField", () => {
  test("general", async () => {
    const inputHandler = vi.fn();
    const user = userEvent.setup();

    render(<PasswordInputField inputHandler={inputHandler} text="" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeTruthy();
    if (input == null) throw new Error();
    const testString = "test Abc123!";
    await user.type(input, testString);

    testString.split("").forEach((char) => {
      expect(inputHandler).toHaveBeenCalledWith(char);
    });
  });

  test("copy-button", async () => {
    const inputHandler = vi.fn();
    const user = userEvent.setup();

    vi.spyOn(navigator.clipboard, "writeText");

    render(<PasswordInputField inputHandler={inputHandler} text="test" />);
    const button = screen.getByRole("button");
    expect(button).toBeTruthy();
    if (button == null) throw new Error();
    await user.click(button);
    expect(navigator.clipboard.writeText).toHaveBeenCalled();

  });
});
