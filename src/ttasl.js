import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const TTASL = ({ currentFeatureState }) => {
  const [userInput, setUserInput] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    const words = inputText.split(/\s+/);
    if (words.length <= 500) {
      setUserInput(inputText);
    }
  };

  const handleSubmit = (event) => {
    navigate("/player", {
      state: {
        words: userInput
          .replaceAll(".", "")
          .replaceAll("?", "")
          .replaceAll("!", "")
          .toLowerCase()
          .split(/\s+/),
      },
    });
  };

  return (
    <div className="App">
      <h2 class="feature">Text2ASL</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input">
          Enter text (up to 500 words):
          <textarea
            id="text-input"
            value={userInput}
            onChange={handleInputChange}
            rows={10}
            cols={50}
          />
        </label>{" "}
        ss
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TTASL;
