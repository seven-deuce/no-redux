import React from "react";

const Context = React.createContext(/* some value */);
Context.displayName = "globalState";

export default Context;

export function connect(Component) {
  return function(props) {
    const { globalState, dispatch } = React.useContext(Context);

    return (
      <Component globalState={globalState} dispatch={dispatch}>
        {props.childeren}
      </Component>
    );
  };
}
