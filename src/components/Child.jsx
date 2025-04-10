import React from "react";
import { memo } from "react";
function Child(props) {
  console.log("Child Component Loaded",props.hrs);
  {
    return props.hrs < 38 ? <h4>Good Morning</h4> : <h4>Good Afternoon</h4>;
  }
}

export default memo(Child)
