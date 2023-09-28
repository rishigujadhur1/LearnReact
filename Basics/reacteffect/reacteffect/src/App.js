import { useEffect, useState } from "react";

function LogValue() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("page loaded");
    setCounter(5);
  });
  return <></>;
}

function App() {
  return <div></div>;
}

export default App;
