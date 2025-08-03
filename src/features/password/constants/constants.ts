export const PASSWORD_LENGTH_MIN = 6;

export const PASSWORD_LENGTH_MAX = 20;

export const SYMBOL_TYPE = {
  CHARS: "symbolTypeChars",
  DIGITS: "symbolTypeDigits",
  SYMBOLS: "symbolTypeSpecial",
};

export const PASSWORD_STRENGTH_WEIGHTS = {
  digits: 1,
  letters: 2,
  symbols: 3,
};

export const PASSWORD_STRENGTH_MAX = PASSWORD_LENGTH_MAX + PASSWORD_STRENGTH_WEIGHTS.digits + PASSWORD_STRENGTH_WEIGHTS.letters + PASSWORD_STRENGTH_WEIGHTS.symbols;
