import React from "react";

const Title = props => (
  <>
    <h1>{props.title}</h1>
    <p>Tasks to do: {props.numberOfTasks}</p>
  </>
);
export default Title;
