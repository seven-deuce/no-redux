import React from "react";
import Child from "./Child";
import List from "./List";

export default function Parent() {
  return (
    <div>
      <h2 style={{ color: "blue" }}>This is Parent.js</h2>
      <Child />
      <List />
    </div>
  );
}
