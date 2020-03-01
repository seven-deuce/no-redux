import React from "react";
import Context from "./../context";

export default function Child() {
  const { globalState, dispatch } = React.useContext(Context);

  return (
    <div style={{ border: "2px dotted green", margin: "1em 0 0 1em" }}>
      <h2 style={{ color: "green" }}>This is Child.js</h2>
      <p style={{ color: "orange" }}>Count is: {globalState.count} </p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: { count: globalState.count - 1 }
          })
        }
      >
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
