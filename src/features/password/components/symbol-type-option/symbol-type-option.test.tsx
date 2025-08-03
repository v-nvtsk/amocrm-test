import { render, screen } from "@testing-library/react";
import { SymbolTypeOption } from "./symbol-type-option";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("SymbolTypeOption", () => {

  test("general", async () => {
    const user = userEvent.setup();
    const changeHandler = vi.fn();

    render(<SymbolTypeOption checked={false} onChange={changeHandler} label="Symbols" />);

    const input = screen.getByRole("checkbox");
    expect(input).toBeTruthy();

    const label = screen.getByText("Symbols");
    expect(label).toBeTruthy();

    await user.click(input);
    expect(changeHandler).toHaveBeenCalledTimes(1);

  });

});
