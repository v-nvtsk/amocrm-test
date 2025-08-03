import { calculatePasswordStrength } from "./calculate-password-strenght";

describe("calculatePasswordStrength", () => {

  const testCases = [
    ["", 0 ],
    ["12345", 0 ],
    ["123456", 1 + 6 ],
    ["abcdef", 2 + 6 ],
    ["!@#$%^", 3 + 6 ],
    ["12345678901234567890", 1 + 20 ],
    ["abcdefghijklmnopqrst", 2 + 20 ],
    ["!@#$%^&*()_+{}|:<>?@", 3 + 20 ],
    ["abcdefg123456!@#$%^&", 1 + 2 + 3 + 20 ],
  ];

  test.each(testCases)("strength for: %s should be %d", (value, expected) => {
    expect(calculatePasswordStrength(String(value))).toEqual(expected);
  });
});
