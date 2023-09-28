import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>;
}

function Count() {
  const [myCounter, setCounter] = useState(1);
  return <>{myCounter}</>;
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
