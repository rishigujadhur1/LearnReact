function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}

function Basketball() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  };

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the hoop!</button>
  );
}

function App() {
  return (
    <div>
      <Football />
      <Basketball />
    </div>
  );
}

export default App;
