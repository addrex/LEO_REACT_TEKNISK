import { useState } from "react";
import Count from "./components/Count";
import Countdown from "./components/countdown";

function App() {
  const [count, setCount] = useState(0); 

  return (
    <div>
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />

      <Countdown />
    </div>
  );
}

export default App;
