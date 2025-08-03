export const calculatePasswordStrength = (value: string): number => {

  if (value.length < 6) return 0;

  let hasLetters = false;
  let hasDigits = false;
  let hasSymbols = false;

  for (const char of value) {
    if (/[a-z]/i.test(char)) hasLetters = true;
    else if (/[0-9]/.test(char)) hasDigits = true;
    else hasSymbols = true;
  }

  const weights = {
    digits: 1,
    letters: 2,
    symbols: 3,
  };

  let score = 0;

  if (hasLetters) score += weights.letters;
  if (hasDigits) score += weights.digits;
  if (hasSymbols) score += weights.symbols;

  score += value.length;

  return score;
};
