import React, { useState, useRef } from "react";
import "./TextAreaComponent.css"; // Import the CSS file for styling

const TextAreaComponent = () => {
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const textAreaRef = useRef(null);

  const applyFormatting = (command) => {
    // Toggle the formatting option
    setActiveFormats((prevState) => ({
      ...prevState,
      [command]: !prevState[command],
    }));

    // Apply the formatting command to the selected text
    if (textAreaRef.current) {
      document.execCommand(command, false, null);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Google Docs Styled Text Area</h1>
      <div className="toolbar">
        <button
          onClick={() => applyFormatting("bold")}
          className={activeFormats.bold ? "active" : ""}
          title="Bold"
        >
          <b>B</b>
        </button>
        <button
          onClick={() => applyFormatting("italic")}
          className={activeFormats.italic ? "active" : ""}
          title="Italic"
        >
          <i>I</i>
        </button>
        <button
          onClick={() => applyFormatting("underline")}
          className={activeFormats.underline ? "active" : ""}
          title="Underline"
        >
          <u>U</u>
        </button>
      </div>
      <div
        className="text-area"
        contentEditable
        ref={textAreaRef}
        onInput={() => {}}
        placeholder="Type your text here..."
        suppressContentEditableWarning={true}
      />
    </div>
  );
};

export default TextAreaComponent;