import logo from "./logo.svg";
import "./App.css";

function MyComponent() {
  return <p>Hello World</p>;
}

function MyComponentWithNumbers() {
  return <>Hello World {1 + 2}</>;
}

function MyComponentWithProp(props) {
  return <>props.name</>;
}

function MyComponentWithDestructuredProps({ name, icon }) {
  return (
    <>
      {icon}
      <h2>{name}</h2>
    </>
  );
}

function App() {
  return (
    <div>
      <MyComponentWithNumbers />
    </div>
  );
}

export default App;
