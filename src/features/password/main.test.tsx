import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PasswordGenerator } from "./main";
import { vi } from "vitest";
import { useHandlers } from "./hooks/use-handlers";
import { SYMBOL_TYPE } from "./constants/constants";

vi.mock("./hooks/use-handlers", () => ({
  useHandlers: vi.fn(),
}));

describe("PasswordGenerator", () => {
  const mockUseHandlers = vi.mocked(useHandlers);

  beforeEach(() => {
    mockUseHandlers.mockReturnValue({
      passwordText: "mockedPassword123!",
      score: 50,
      passwordLength: 16,
      takeChars: true,
      takeNumbers: true,
      takeSymbols: true,
      buttonClickHandler: vi.fn(),
      inputPasswordHandler: vi.fn(),
      inputMaxLengthHandler: vi.fn(),
      optionToggleHandler: vi.fn(),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("general", async () => {
    const buttonClickHandler = vi.fn();
    const inputMaxLengthHandler = vi.fn();
    const optionToggleHandler = vi.fn();

    mockUseHandlers.mockReturnValue({
      passwordText: "test",
      score: 10,
      passwordLength: 10,
      takeChars: true,
      takeNumbers: false,
      takeSymbols: false,
      buttonClickHandler,
      inputPasswordHandler: vi.fn(),
      inputMaxLengthHandler,
      optionToggleHandler,
    });

    render(<PasswordGenerator />);

    await userEvent.click(screen.getByRole("button", { name: /сгенерировать/i }));
    expect(buttonClickHandler).toHaveBeenCalledTimes(1);

    fireEvent.input(screen.getByRole("slider"), { target: { value: "12" } });
    expect(inputMaxLengthHandler).toHaveBeenCalledWith(12);

    await userEvent.click(screen.getAllByRole("checkbox")[0]);
    expect(optionToggleHandler).toHaveBeenCalledWith(SYMBOL_TYPE.UPPERCASE);

    await userEvent.click(screen.getAllByRole("checkbox")[1]);
    expect(optionToggleHandler).toHaveBeenCalledWith(SYMBOL_TYPE.DIGITS);

    await userEvent.click(screen.getAllByRole("checkbox")[2]);
    expect(optionToggleHandler).toHaveBeenCalledWith(SYMBOL_TYPE.SYMBOLS);
  });
});
