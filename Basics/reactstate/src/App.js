import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>;
}

function Count() {
  const [myCounter, setCounter] = useState(1);
  return (
    <>
      <p>{myCounter}</p>
      <button onClick={() => setCounter(5)}>Set to 5</button>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        Add
      </button>
    </>
  );
}

function App() {
  return (
    <div>
      <FavoriteColor />
      <Count />
    </div>
  );
}

export default App;
