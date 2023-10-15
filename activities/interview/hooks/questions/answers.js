// Answer 1:
// The useState hook is used to manage state in functional components. It allows you to declare and manage state variables in a component's function body. You use it by calling useState with an initial state value and receiving an array containing the current state and a function to update the state.

// Answer 2:
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Answer 3:
// Side effects in React are operations that are not directly related to rendering components, such as data fetching, setting up subscriptions, or manually changing the DOM. You use the useEffect hook to manage side effects. It's called after render and allows you to perform side effects in function components.

// Answer 4:
import React, { useState, useEffect } from "react";

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);
  }, []);

  return <p>Random Number: {randomNumber}</p>;
}

// Answer 5:
// The second argument of useEffect is an array of dependencies. It specifies which values the effect depends on. When dependencies are included, the effect only runs if any of the listed dependencies change between renders. Omitting the dependency array or passing an empty array makes the effect run only on component mount and unmount.
