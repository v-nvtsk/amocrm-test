import styles from "./style.module.css";

interface Props{
  value: number
  max: number
}

export const PasswordStrengthVisualizer = ({ max, value }: Props) => {
  const percent = (value / max) * 100;

  const backgroundColor = percent < 33
    ? "red"
    : percent < 66
      ? "yellow"
      : "lightgreen";

  return (
    <div className={styles.passwordStrengthVisualizer}>
      <div
        role="progressbar"
        className={styles.progress}
        style={{ "width": `${percent}%`,
          backgroundColor }}
      >
      </div>
    </div>
  );
};
