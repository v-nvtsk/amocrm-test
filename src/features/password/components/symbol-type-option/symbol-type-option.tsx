import styles from "./style.module.css";

interface Props{
  checked: boolean
  onChange: () => void
  label: string
}

export const SymbolTypeOption = ({ checked, onChange, label }: Props) => {
  return (
    <div className={styles.symbolTypeOption}>
      <input type="checkbox" name={label} id={label}
        checked={checked}
        onChange={onChange}/>
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

