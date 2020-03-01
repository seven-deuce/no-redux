import React from "react";
import Context, { connect } from "./../context";
import { fetchAnything } from "../actions/index";

function List({ globalState, dispatch }) {
  // const { globalState, dispatch } = React.useContext(Context);

  React.useEffect(() => {
    // you can update globar state directly:
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(res => dispatch({ type: "get-users", payload: res }));

    // or use an action function:
    fetchAnything("https://jsonplaceholder.typicode.com/users", dispatch);
  }, []);

  return (
    <div style={{ border: "2px dotted gray", margin: "1em 0 0 1em" }}>
      <h2 style={{ color: "gray" }}>This is List.js</h2>
      <i>renders an async operation</i>
      <ul>
        {globalState.users.map(item => (
          <li key={item.id}>
            <b>{item.name}</b> <i>from</i> {item.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

// connect function  will inject globalState and dispatch as props
export default connect(List);
