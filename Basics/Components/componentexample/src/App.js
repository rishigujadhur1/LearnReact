import logo from "./logo.svg";
import "./App.css";

let MyComponent = () => {
  return <p>Hello World</p>;
};

let MyComponentWithNumbers = () => {
  return <>Hello World {1 + 2}</>;
};

let MyComponentWithProp = (props) => {
  return <>props.name</>;
};

// Displaying multiple components
let Car = () => {
  return (
    <>
      <li>Brand: BMW</li>
      <li>Year: 2023</li>
    </>
  );
};

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
      <MyComponentWithProp name="Hello World!" />
      <MyComponentWithProp name="Hello World!" />
      <MyComponentWithProp name={1 + 1} />
      <Car />
    </div>
  );
}

export default App;
