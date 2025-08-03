import { PasswordGenerator } from "./features/password/main";
import { QRGenerator } from "./features/qr-generator/main";

function App() {

  return (
    <>
      <QRGenerator/>
      <PasswordGenerator/>
    </>
  );
}

export default App;
