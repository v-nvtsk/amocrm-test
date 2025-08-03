export const PASSWORD_LENGTH_MIN = 6;

export const PASSWORD_LENGTH_MAX = 20;

export const SYMBOL_TYPE = {
  LOWERCASE: "symbolTypeLowercase",
  UPPERCASE: "symbolTypeUppercase",
  DIGITS: "symbolTypeDigits",
  SYMBOLS: "symbolTypeSpecial",
};

export const PASSWORD_STRENGTH_WEIGHTS = {
  lowercase: 1,
  uppercase: 2,
  digits: 3,
  symbols: 4,
};

export const PASSWORD_STRENGTH_MAX =
  PASSWORD_LENGTH_MAX +
  PASSWORD_STRENGTH_WEIGHTS.lowercase +
  PASSWORD_STRENGTH_WEIGHTS.uppercase +
  PASSWORD_STRENGTH_WEIGHTS.digits +
  PASSWORD_STRENGTH_WEIGHTS.symbols;
