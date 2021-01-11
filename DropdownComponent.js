import React from "react";
const DropdownComponent = (props) => {
  return (
    <>
      <option
        name="Shifts"
        value={props.shiftVal}
        id={props.ind}
        style={{ padding: "0px 5px" }}
      >{props.shiftVal}</option>
    </>
  );
};
export default DropdownComponent;
