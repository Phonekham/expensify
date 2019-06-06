import React from "react";

const EditExpensePage = props => {
  console.log(props);
  return <div>Edit the expense of {props.match.params.id}</div>;
};

export default EditExpensePage;
