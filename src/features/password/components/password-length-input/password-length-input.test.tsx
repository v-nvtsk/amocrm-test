import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { PasswordLengthInput } from "./password-length-input";
import { vi } from "vitest";

describe("PasswordLengthInput", () => {
  test("general", async () => {

    const changeHandler = vi.fn();

    render(<PasswordLengthInput changeHandler={changeHandler} max={20} min={6} value={10}/>);

    const input = screen.getByRole("slider");
    expect(input).toBeTruthy();

    expect(input.getAttribute("min")).toBe("6");
    expect(input.getAttribute("max")).toBe("20");
    expect(input.getAttribute("value")).toBe("10");

    expect(input.getAttribute("type")).toBe("range");

    const info = await screen.findAllByText("Длина пароля: 10 знаков");
    expect(info).toHaveLength(1);
  });

  test("change value", async () => {

    const changeHandler = vi.fn();

    render(<PasswordLengthInput changeHandler={changeHandler} max={20} min={6} value={10}/>);

    const input = screen.getByRole("slider");

    fireEvent.change(input, { target: { value: 11 } });
    await waitFor(() => {
      expect(changeHandler).toHaveBeenCalledWith(11);
    });
  });
});
