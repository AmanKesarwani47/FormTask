import React, { useContext } from "react";
import { Radio } from "semantic-ui-react";
import { StateContext } from "./StateContext";
const RadioComponent = (props) => {
  const [Week, setWeek] = useContext(StateContext);
  const ShowWeek = (e) => {
    props.passWeek(e);
  };
  return (
    <>
      <Radio
        type="radio"
        name="radioGroup"
        label={props.day}
        value={props.day}
        checked={props.day === Week}
        onChange={ShowWeek}
        id={props.ind}
        style={{ padding: "0px 5px" }}
      />
    </>
  );
};
export default RadioComponent;
