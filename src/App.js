import React from "react";
import Context from "./context";
import Parent from "./components/Parent";
import { reducer, initialState } from "./reducers/index";

export default function App() {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);
  // console.log(reducer, initialState, globalState);
  return (
    <Context.Provider value={{ globalState, dispatch }}>
      <h1>This is App.js</h1>
      <Parent />
    </Context.Provider>
  );
}
