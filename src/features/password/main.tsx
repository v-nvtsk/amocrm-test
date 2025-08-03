import styles from "./style.module.css";
import { SymbolTypeOption, PasswordInputField, PasswordStrengthVisualizer } from "./components/";
import { useHandlers } from "./hooks/use-handlers";
import { PasswordLengthInput } from "./components/password-length-input/password-length-input";
import { PASSWORD_LENGTH_MAX, PASSWORD_LENGTH_MIN, PASSWORD_STRENGTH_MAX, SYMBOL_TYPE } from "./constants";

export const PasswordGenerator = () => {

  const { buttonClickHandler, inputMaxLengthHandler, inputPasswordHandler, optionToggleHandler, passwordText, score, passwordLength, takeChars, takeNumbers, takeSymbols } = useHandlers();

  return (
    <div className={styles.wrapper}>
      <PasswordInputField inputHandler={inputPasswordHandler} text={passwordText} />
      <PasswordStrengthVisualizer value={score} max={PASSWORD_STRENGTH_MAX} />

      <PasswordLengthInput changeHandler={inputMaxLengthHandler} max={PASSWORD_LENGTH_MAX} min={PASSWORD_LENGTH_MIN} value={passwordLength}/>

      <div className={styles.symbolTypeGroup}>
        <SymbolTypeOption
          checked={takeChars}
          onChange={() => optionToggleHandler(SYMBOL_TYPE.UPPERCASE)}
          label="Заглавные буквы"/>

        <SymbolTypeOption
          checked={takeNumbers}
          onChange={() => optionToggleHandler(SYMBOL_TYPE.DIGITS)}
          label="Цифры"/>

        <SymbolTypeOption
          checked={takeSymbols}
          onChange={() => optionToggleHandler(SYMBOL_TYPE.SYMBOLS)}
          label="Спец. символы"/>
      </div>

      <button className={styles.btnGenerate} onClick={buttonClickHandler}>Сгенерировать</button>
    </div>
  );
};

