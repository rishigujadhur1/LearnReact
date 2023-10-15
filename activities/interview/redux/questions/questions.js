// Question 1:
// Given the following Redux store and actions, what will be the state after the "INCREMENT" action is dispatched twice, followed by the "DECREMENT" action once?

const initialState1 = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store1 = Redux.createStore(counterReducer);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

console.log(store.getState());

//Q2
// Given the following Redux store and actions, what will be the state after the "ADD_TODO" action is dispatched with the payload "Buy groceries"?

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = Redux.createStore(todoReducer);

store.dispatch({ type: "ADD_TODO", payload: "Buy groceries" });

console.log(store.getState());

// Q3
// Given the following Redux store and actions, what will be the state after the "REMOVE_TODO" action is dispatched with the payload 1?

const initialState3 = [
  { id: 0, text: "Buy groceries" },
  { id: 1, text: "Clean the house" },
];

const todoReducer3 = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const store3 = Redux.createStore(todoReducer);

store.dispatch({ type: "REMOVE_TODO", payload: 1 });

console.log(store.getState());
//Q4
// Given the following Redux store and actions, what will be the state after the "UPDATE_TODO" action is dispatched with the payload { id: 0, text: "Read a book" }?

const initialState5 = [
  { id: 0, text: "Buy groceries" },
  { id: 1, text: "Clean the house" },
];

const todoReducer5 = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
};

const store5 = Redux.createStore(todoReducer);

store.dispatch({
  type: "UPDATE_TODO",
  payload: { id: 0, text: "Read a book" },
});

console.log(store.getState());
