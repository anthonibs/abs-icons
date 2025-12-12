import { useState } from "react";
import {
  BoxFilledIcon,
  PaletteColorOutlineIcon,
  SunOutlineIcon,
} from "./ui/icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <h1>Vite + React</h1>

      <div style={{ color: "red" }}>
        <BoxFilledIcon />

        <PaletteColorOutlineIcon />

        <PaletteColorOutlineIcon color="blue" />

        <PaletteColorOutlineIcon color="#00ff00" />

        <SunOutlineIcon />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
