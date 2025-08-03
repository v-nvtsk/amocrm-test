import { HeatMap } from "./features/heatmap/main";
import { PasswordGenerator } from "./features/password/main";
import { QRGenerator } from "./features/qr-generator/main";
import styles from "./app.module.css";

function App() {

  return (
    <div className={styles.grid}>
      <div className={styles.heatmap}>
        <HeatMap />
      </div>
      <div className={styles.qr}>
        <QRGenerator/>
      </div>
      <div className={styles.passwordGenerator}>
        <PasswordGenerator/>
      </div>
    </div>
  );
}

export default App;
