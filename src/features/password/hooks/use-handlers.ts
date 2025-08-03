import { useCallback, useState } from "react";
import { generatePassword, calculatePasswordStrength } from "../utils";
import { SYMBOL_TYPE } from "../constants";

export function useHandlers(){
  const [passwordText, setPasswordText] = useState("");
  const [score, setScore] = useState(0);
  const [passwordLength, setPasswordLength] = useState(16);
  const [takeChars, setTakeChars] = useState(true);
  const [takeNumbers, setTakeNumbers] = useState(true);
  const [takeSymbols, setTakeSymbols] = useState(true);

  const buttonClickHandler = useCallback((ev: React.MouseEvent) => {
    ev.preventDefault();

    const password = generatePassword({ length: passwordLength,
      uppercase: takeChars,
      numbers: takeNumbers,
      symbols: takeSymbols,
    });

    setPasswordText(password);
    setScore(calculatePasswordStrength(password));
  }, [passwordLength, takeChars, takeNumbers, takeSymbols]);

  const optionToggleHandler = useCallback((option: string) => {
    if (option === SYMBOL_TYPE.UPPERCASE) setTakeChars(!takeChars);
    if (option === SYMBOL_TYPE.DIGITS) setTakeNumbers(!takeNumbers);
    if (option === SYMBOL_TYPE.SYMBOLS) setTakeSymbols(!takeSymbols);
  }, [takeChars, takeNumbers, takeSymbols]);

  const inputPasswordHandler = useCallback((value: string) => {
    setPasswordText(value);
    setScore(calculatePasswordStrength(value));
  }, []);

  const inputMaxLengthHandler = useCallback((value: number) => {
    setPasswordLength(value);
  }, []);

  return {
    score,
    passwordText,
    passwordLength,
    buttonClickHandler,
    optionToggleHandler,
    inputPasswordHandler,
    inputMaxLengthHandler,
    takeChars,
    takeNumbers,
    takeSymbols,
  };

}
