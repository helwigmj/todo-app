import React, { useState } from "react";
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Form(props) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const handleDateChange = date => setDate(date);
    const handleNameChange = e => setName(e.target.value);
    // min + max for date range
    const today = new Date();
    const inThreeDays = new Date();
    inThreeDays.setDate(inThreeDays.getDate() + 3);
    // functions
    function handleSubmit(e) {
        e.preventDefault();
        if (name === "") {
          return;
        }
        console.log('date: ', date.toLocaleDateString());
        props.addTask(name, date.toLocaleDateString());
        setName("");
    };
    return (
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
        />
        <h3 className="label-wrapper">
          <label htmlFor="new-todo-date" className="label__lg">
            When does it need to be done?
          </label>
        </h3>
        <ReactDatePicker
          wrapperClassName="input input__lg"
          selected={date}
          onChange={handleDateChange}
          minDate={today}
          maxDate={inThreeDays}
          dateFormat="MMMM d, yyyy"  
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
}

export default Form;