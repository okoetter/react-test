import React from "react";
import "./InputPlayerNames.css";

const start = () => {

};

const InputPlayerNames = () => {
  return (
    <form className="InputPlayerNames">
      <p>
        <label htmlFor="Team1">Name of Team 1:</label><br />
        <input type="text" id="Team1" name="Team1" />
      </p>
      <p>
        <label htmlFor="Team2">Name of Team 2:</label><br />
        <input type="text" id="Team2" name="Team2" />
      </p>
      <div className="buttonWrapper">
        <button onClick="start">Start</button>
      </div>
    </form>
  )
};

export default InputPlayerNames;
