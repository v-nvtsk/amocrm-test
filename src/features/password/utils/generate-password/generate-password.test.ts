import { generatePassword, SYMBOLS } from "./generate-password";

const escapeForRegExp = (str: string): string =>
  str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

describe("generatePassword", () => {
  test("only chars", () => {
    const password = generatePassword({ length: 10,
      uppercase: true,
      numbers: false,
      symbols: false });

    expect(password).toHaveLength(10);
    expect(password).toMatch(/^[a-zA-Z]+$/);
  });

  test("only numbers", () => {
    const password = generatePassword({ length: 10,
      uppercase: false,
      numbers: true,
      symbols: false });

    expect(password).toHaveLength(10);
    expect(password).toMatch(/^[a-z0-9]+$/);
  });

  test("only symbols", () => {
    const password = generatePassword({ length: 10,
      uppercase: false,
      numbers: false,
      symbols: true });

    expect(password).toHaveLength(10);
    expect(password).toMatch(new RegExp(`^[a-z${escapeForRegExp(SYMBOLS)}]+`));
  });

  test("no selection", () => {
    const password = generatePassword({ length: 10,
      uppercase: false,
      numbers: false,
      symbols: false });

    expect(password).toHaveLength(10);
  });
});
