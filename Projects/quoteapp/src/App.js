import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("Hello World!");

  useEffect(() => {
    getQuote();
  }, []); // runs once on page load

  async function getQuote() {
    axios
      .get("http://api.quotable.io/random")
      .then((response) => {
        // update quote, needs to be in function which has a react component or react hook
        setQuote(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {quote}
      <button onClick={getQuote}>Get Quote</button>
    </>
  ); // react component
}

export default App;
