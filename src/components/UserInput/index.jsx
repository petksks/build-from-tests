import React, { useState } from "react";

const UserInput = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setName(e.target.value);
    if (submitted) {
      setSubmitted(false); // Reset submitted status when name is changed
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      // If input is empty or whitespace only, do not submit
      return;
    }
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
      {submitted && name && <div>Welcome {name}!</div>}
    </>
  );
};

export default UserInput;
