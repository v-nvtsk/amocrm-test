import React, { useState, type CSSProperties } from "react";
import { Button } from "$/ui/button/button";
import { CELL_SIZE, MAX_OPACITY, CLICKS_FOR_MAX_OPACITY } from "./constants";
import styles from "./style.module.css";

export const HeatMap = () => {
  const [clickCounts, setClickCounts] = useState<Map<string, number>>(new Map());

  const handleReset = () => {
    setClickCounts(new Map());
  };

  const handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const rect = ev.currentTarget.getBoundingClientRect();
    const clickX = ev.clientX - rect.left;
    const clickY = ev.clientY - rect.top;

    const col = Math.floor(clickX / CELL_SIZE);
    const row = Math.floor(clickY / CELL_SIZE);
    const cellKey = `${row}_${col}`;

    setClickCounts((prevCounts) => {
      const newCounts = new Map(prevCounts);
      const currentCount = newCounts.get(cellKey) || 0;
      newCounts.set(cellKey, currentCount + 1);
      return newCounts;
    });
  };

  const hotspotsToRender = Array.from(clickCounts.entries()).map(([key, count]) => {
    const [rowStr, colStr] = key.split("_");
    const row = parseInt(rowStr);
    const col = parseInt(colStr);

    const x = col * CELL_SIZE;
    const y = row * CELL_SIZE;

    const opacity = Math.min(MAX_OPACITY, count / CLICKS_FOR_MAX_OPACITY);

    return (
      <div
        className={styles.hotspot}
        key={key}
        style={{
          top: y,
          left: x,
          opacity: opacity,
        }}
      ></div>
    );
  });

  return (
    <div className={styles.wrapper}>
      <h2>Heatmap</h2>
      <div className={styles.heatmap}
        style={{
          "--cell-size": `${CELL_SIZE}px`,
        } as CSSProperties}
        onClick={handleClick}
      >
        {hotspotsToRender}
      </div>
      <div className={styles.controls}>
        <Button text="Сбросить" onClick={handleReset}/>
      </div>
    </div>
  );
};
