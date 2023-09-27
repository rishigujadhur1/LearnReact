function Condition({ value }) {
  if (value > 1) {
    return <h1>Value is greater than 1 </h1>;
  } else {
    return <p>Value is less than 1 </p>;
  }
}

function App() {
  return (
    <>
      <Condition value="2" />
    </>
  );
}

export default App;
