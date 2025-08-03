import styles from "./style.module.css";

interface Props{
  onClick: () => void
  text: string
}

export const Button = ({ onClick, text }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>{text}</button>
  );
};

