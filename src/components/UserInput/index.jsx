import React, { useState } from "react";

const UserInput = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit(name);
    console.log("userinput name:", name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserInput;