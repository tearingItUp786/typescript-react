import React from "react";

interface TestProps {
  name: string;
}

const Test = (props: TestProps) => (
  <div className="test">
    <h1>{props.name}</h1>
  </div>
);

export default Test;
