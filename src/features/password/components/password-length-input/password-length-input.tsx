import styles from "./style.module.css";

interface Props{
  min: number,
  max: number,
  changeHandler: (value: number) => void
  value: number
}

export const PasswordLengthInput = ({ changeHandler, max, min,
  value,
}: Props) => {

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(Number(ev.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <input className={styles.inputRange} type="range" name="passwordLength" id="passwordLength"
        min={min} max={max} onChange={onChange} value={value}
      />
      <label className={styles.label} htmlFor="passwordLength">Длина пароля: {value} знаков</label>
    </div>
  );
};

