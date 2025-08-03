import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useHandlers } from "./use-handlers";
import { generatePassword, calculatePasswordStrength } from "../utils";
import type React from "react";
import { PASSWORD_STRENGTH_MAX, SYMBOL_TYPE } from "../constants/constants";

vi.mock("../utils", async () => {
  const actual = await vi.importActual<typeof import("../utils")>("../utils");
  return {
    ...actual,
    generatePassword: vi.fn(),
    calculatePasswordStrength: vi.fn(),
  };
});

const mockGeneratePassword = vi.mocked(generatePassword);
const mockCalculatePasswordStrength = vi.mocked(calculatePasswordStrength);

describe("useHandlers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("initial state is correct", () => {
    const { result } = renderHook(() => useHandlers());

    expect(result.current.passwordText).toBe("");
    expect(result.current.score).toBe(0);
    expect(result.current.passwordLength).toBe(16);
    expect(result.current.takeChars).toBe(true);
    expect(result.current.takeNumbers).toBe(true);
    expect(result.current.takeSymbols).toBe(true);
  });

  test("buttonClickHandler generates password and updates state", () => {
    const mockPassword = "abc123!@#";
    const mockScore = 21;

    mockGeneratePassword.mockReturnValue(mockPassword);
    mockCalculatePasswordStrength.mockReturnValue(mockScore);

    const { result } = renderHook(() => useHandlers());

    act(() => {
      result.current.buttonClickHandler({
        preventDefault: vi.fn(),
      } as unknown as React.MouseEvent);
    });

    expect(mockGeneratePassword).toHaveBeenCalledWith({
      length: 16,
      chars: true,
      numbers: true,
      symbols: true,
    });
    expect(result.current.passwordText).toBe(mockPassword);
    expect(result.current.score).toBe(mockScore);
  });

  test("inputMaxLengthHandler updates password length", () => {
    const { result } = renderHook(() => useHandlers());

    act(() => {
      result.current.inputMaxLengthHandler(12);
    });

    expect(result.current.passwordLength).toBe(12);
  });

  test("optionToggleHandler toggles correct option", () => {
    const { result } = renderHook(() => useHandlers());

    act(() => {
      result.current.optionToggleHandler(SYMBOL_TYPE.DIGITS);
    });
    expect(result.current.takeNumbers).toBe(false);

    act(() => {
      result.current.optionToggleHandler(SYMBOL_TYPE.DIGITS);
    });
    expect(result.current.takeNumbers).toBe(true);
  });

  test("inputPasswordHandler updates password and score", () => {
    const mockScore = PASSWORD_STRENGTH_MAX;
    mockCalculatePasswordStrength.mockReturnValue(mockScore);

    const { result } = renderHook(() => useHandlers());
    const testValue = "newPassword123!";
    act(() => {
      result.current.inputPasswordHandler(testValue);
    });

    expect(result.current.passwordText).toBe(testValue);
    expect(result.current.score).toBe(mockScore);
    expect(mockCalculatePasswordStrength).toHaveBeenCalledWith(testValue);
  });

  test("optionToggleHandler ignores unknown option", () => {
    const { result } = renderHook(() => useHandlers());

    act(() => {
      result.current.optionToggleHandler("unknown");
    });

    expect(result.current.takeChars).toBe(true);
    expect(result.current.takeNumbers).toBe(true);
    expect(result.current.takeSymbols).toBe(true);
  });
});
