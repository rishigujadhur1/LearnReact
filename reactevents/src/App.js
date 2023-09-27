function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}

function App() {
  return (
    <div>
      <Football />
    </div>
  );
}

export default App;
