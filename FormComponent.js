import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Form, Radio } from "semantic-ui-react";
import DropdownComponent from "./DropdownComponent";
import RadioComponent from "./RadioComponent";
import ShowForm from "./ShowForm";
import { StateContext } from "./StateContext";

const repeatOptions = [
  {
    key: "None",
    value: "None",
    text: "None",
  },
  {
    key: "Daily",
    value: "Daily",
    text: "Daily",
  },
  {
    key: "Weekly",
    value: "Weekly",
    text: "Weekly",
  },
];

const ShiftOptions = [
  {
    value: "Morning Shift - 5am to 9am",
    text: "Morning Shift - 5am to 9am",
    key: "Morning Shift - 5am to 9am",
  },
];

const WeeklyOptions = [
  {
    value: "Weekly Days",
    text: "Weekly Days",
    key: "Weekly Days",
  },
];

const FormComponent = () => {
  const [Week, setWeek] = useContext(StateContext);
  const [Date, setDate] = useState("");
  const [RepeatType, setRepeatType] = useState("");
  const [Shift, setShift] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [DayOfWeek, setDayOfWeek] = useState("");
  const [WeekOnly, setWeekOnly] = useState("");

  const handleChange = (e) => {
    setWeek(e.target.value);
  };

  const Weekday = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <>
      <Container>
        <Form>
          <Form.Field>
            <label>Select Start Date and Shift Times</label>
            <label style={{ fontWeight: "normal" }}>
              each row represent a shift
            </label>
          </Form.Field>

          <Form.Field inline>
            <label>Date</label>
            <input
              placeholder="Date"
              value={Date}
              name="Date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </Form.Field>

          <Form.Field inline>
            <label>Select Repeat Type</label>
            <select
              onChange={(e) => {
                setRepeatType(e.target.value);
              }}
            >
              {repeatOptions.map((val, ind) => {
                return <DropdownComponent shiftVal={val.value} key={ind} />;
              })}
            </select>
          </Form.Field>

          <Form.Field inline>
            <label>Select Shift</label>
            <select
              onChange={(e) => {
                setShift(e.target.value);
              }}
            >
              {ShiftOptions.map((val, ind) => {
                return <DropdownComponent shiftVal={val.value} key={ind} />;
              })}
            </select>
          </Form.Field>

          <Form.Field inline>
            <label>Start Time</label>
            <input
              placeholder="Start Time"
              value={StartTime}
              name="StartTime"
              onChange={(e) => {
                setStartTime(e.target.value);
              }}
            />
          </Form.Field>

          <Form.Field inline>
            <label>End Time</label>
            <input
              placeholder="End Time"
              value={EndTime}
              name="EndTime"
              onChange={(e) => {
                setEndTime(e.target.value);
              }}
            />
          </Form.Field>

          <Form.Field>
            {Weekday.map((wDay, index) => (
              <RadioComponent
                day={wDay}
                passWeek={handleChange}
                key={index}
                ind={index}
              />
            ))}
          </Form.Field>
          <Form.Field>
            <input
              type="radio"
              value="Weekly Days"
              onChange={(e) => {
                setWeekOnly(e.target.value);
              }}
              style={{ padding: "0px 5px" }}
            />
            Weekly Days
          </Form.Field>

          <NavLink
            to={{pathname : "/ShowForm", AboutProps:{date:{Date},
                RType:{RepeatType},
                shift:{Shift},
                STime:{StartTime},
                ETime:{EndTime},
                DayW:{DayOfWeek},
                WOnly:{WeekOnly}}}}
            style={{ borderRadius: "25px", position: "fixed", right: "120px" }}
          >
            Add+
          </NavLink>
        </Form>
      </Container>
    </>
  );
};

export default FormComponent;
