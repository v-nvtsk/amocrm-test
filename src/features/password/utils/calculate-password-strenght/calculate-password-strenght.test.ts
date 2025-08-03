import { PASSWORD_STRENGTH_MAX, PASSWORD_STRENGTH_WEIGHTS } from "../../constants/constants";
import { calculatePasswordStrength } from "./calculate-password-strenght";

describe("calculatePasswordStrength", () => {

  const testCases: [string, number][] = [
    ["", 0 ],
    ["12345", 0 ],
    ["123456", PASSWORD_STRENGTH_WEIGHTS.digits + 6 ],
    ["Abcdef", PASSWORD_STRENGTH_WEIGHTS.lowercase + PASSWORD_STRENGTH_WEIGHTS.uppercase + 6 ],
    ["!@#$%^", PASSWORD_STRENGTH_WEIGHTS.symbols + 6 ],
    ["12345678901234567890", PASSWORD_STRENGTH_WEIGHTS.digits + 20 ],
    ["ABCDEFGHIJKLMNOPQRST", PASSWORD_STRENGTH_WEIGHTS.uppercase + 20 ],
    ["!@#$%^&*()_+{}|:<>?@", PASSWORD_STRENGTH_WEIGHTS.symbols + 20 ],
    ["Abcdefg123456!@#$%^&", PASSWORD_STRENGTH_MAX ],
  ];

  test.each(testCases)("strength for: %s should be %d", (value, expected) => {
    expect(calculatePasswordStrength(value)).toEqual(expected);
  });
});
