import { randomIntBetween } from "$/utils";

interface PasswordGeneratorProps{
  length: number;
  chars: boolean;
  numbers: boolean;
  symbols: boolean;

}

const LETTERS_LOWER = "abcdefghijklmnopqrstuvwxyz";
const LETTERS_UPPER = LETTERS_LOWER.toUpperCase();

export const LETTERS = LETTERS_LOWER.concat(LETTERS_UPPER);

export const DIGITS = "0123456789";

export const SYMBOLS = "!@#$%^&*()-_=+[]{}:,.?";

export const generatePassword = ({ length, chars, numbers, symbols }: PasswordGeneratorProps): string => {
  if (!chars && !numbers && !symbols) return "";

  const result = [];

  const pools: string[] = [];
  if (chars) pools.push(LETTERS);
  if (numbers) pools.push(DIGITS);
  if (symbols) pools.push(SYMBOLS);

  for (let i = 0; i < length; i++) {
    const pool = pools[randomIntBetween(0, pools.length - 1)];
    const ch = pool[randomIntBetween(0, pool.length - 1)];
    result.push(ch);
  }

  return result.join("");
};
