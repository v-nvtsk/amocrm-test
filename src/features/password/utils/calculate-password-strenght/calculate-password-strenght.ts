import { PASSWORD_STRENGTH_WEIGHTS } from "../../constants/constants";

export const calculatePasswordStrength = (value: string): number => {

  if (value.length < 6) return 0;

  let hasLowercase = false;
  let hasUppercase = false;
  let hasDigits = false;
  let hasSymbols = false;

  for (const char of value) {
    if (/[a-z]/.test(char)) { // Проверяем только строчные буквы
      hasLowercase = true;
    } else if (/[a-z]/i.test(char)) hasUppercase = true;
    else if (/[0-9]/.test(char)) hasDigits = true;
    else hasSymbols = true;
  }

  let score = 0;

  if (hasLowercase) score += PASSWORD_STRENGTH_WEIGHTS.lowercase;
  if (hasUppercase) score += PASSWORD_STRENGTH_WEIGHTS.uppercase;
  if (hasDigits) score += PASSWORD_STRENGTH_WEIGHTS.digits;
  if (hasSymbols) score += PASSWORD_STRENGTH_WEIGHTS.symbols;

  score += value.length;

  return score;
};
