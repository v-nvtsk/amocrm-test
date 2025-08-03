import React, { useState } from "react";
import styles from "./style.module.css";
import { CopyIcon } from "$/ui/copy-icon";

interface Props{
  inputHandler: (text: string) => void
  text: string
}

export const PasswordInputField = ({ inputHandler, text }: Props) => {
  const [scaled, setScaled] = useState(false);

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    inputHandler(ev.target.value);
  };

  const copyHandler = () => {
    setScaled(true);
    navigator.clipboard.writeText(text)
      .catch(() => console.error("Failed to copy password"))
      .finally(() => {
        setTimeout(() => setScaled(false), 300);
      });
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        onChange={onChange}
        name="password"
        id="password"
        className={styles.inputField}
        maxLength={20}
        value={text}
      />

      <button
        className={[styles.copyIconWrapper, scaled && styles.active].join(" ")}
        onClick={copyHandler} aria-label="Copy">
        <CopyIcon/>
      </button>

    </div>
  );
};
