import React from "react";
import { Container, Label } from "semantic-ui-react";

const ShowForm = (props) => {
    console.log(props.location.AboutProps);
  return (
    <Container>
      <Label>Date</Label>
      {props.location.AboutProps.date}
      <Label>Repeat Type</Label>
      {props.location.AboutProps.RType}
      <Label>Shift</Label>
      {props.location.AboutProps.shift}
      <Label>Start Time</Label>
      {props.location.AboutProps.STime}
      <Label>End Time</Label>
      {props.location.AboutProps.ETime}
      <Label>Day</Label>
      {props.location.AboutProps.DayW}
      <Label>Weekday</Label>
      {props.location.AboutProps.WOnly}
    </Container>
  );
};

export default ShowForm;
