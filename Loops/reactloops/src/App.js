function ListOfFruits() {
  const data = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
  ];
  return (
    <ul>
      {data.map(({ id, name }) => (
        <li key="{id}">name</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <ListOfFruits />
    </div>
  );
}

export default App;
