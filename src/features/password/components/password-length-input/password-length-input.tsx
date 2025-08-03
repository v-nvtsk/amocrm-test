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
    <div style={{ display: "flex",
      justifyContent: "space-between" }}>
      <input type="range" name="passwordLength" id="passwordLength"
        min={min} max={max} onChange={onChange} value={value}
        style={{ width: "50%" }}/>
      <label htmlFor="passwordLength">Длина пароля: {value} знаков</label>
    </div>
  );
};

