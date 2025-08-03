import React, { useState } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { Button } from "$/ui/button/button";

import styles from "./style.module.css";
import { useDownload } from "./hooks/use-download";

interface Props{
  initialText?: string
}

export const QRGenerator = ({ initialText }: Props) => {
  const [inputText, setInputText] = useState(initialText || "https://github.com/v-nvtsk/amocrm-test");
  const [format, setFormat] = useState("png");
  const { canvasRef, handleDownload, svgRef } = useDownload({ format });

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(ev.target.value);
  };

  const handleSelectFormat = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setFormat(ev.target.value);
  };

  const qrOpacity: number = inputText === "" ? 0 : 1;

  const qrCodeProps = {
    value: inputText,
    level: "M" as const,
    size: 256,
  };

  return (
    <div className={styles.wrapper}>
      <input className={styles.inputField} onChange={handleInput} type="text" name="inputText" id="inputText" value={inputText} maxLength={1024}
        placeholder="Введите текст"/>

      { format === "svg"
        ? <QRCodeSVG ref={svgRef} {...qrCodeProps} style={{ opacity: qrOpacity }}/>
      : <QRCodeCanvas ref={canvasRef} {...qrCodeProps} style={{ opacity: qrOpacity }}/>
      }

      <label htmlFor="selectFormat">Выберите формат сохранения файла</label>
      <select className={styles.selectFormat} name="selectFormat" id="selectFormat" value={format} onChange={handleSelectFormat}>
        <option value="png">PNG</option>
        <option value="svg">SVG</option>
        <option value="jpeg">JPG</option>
      </select>

      <Button text="Скачать" onClick={handleDownload}/>
    </div>
  );
};

