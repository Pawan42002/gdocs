import React, { useState, useRef } from "react";
import "./TextAreaComponent.css"; // Import the CSS file for styling

const TextAreaComponent = () => {
	const [text, setText] = useState("");
	const textAreaRef = useRef(null);

	const handleInput = () => {
		setText(textAreaRef.current.innerHTML); // This text will be set using an API key from the backend
	};

	const applyFormatting = (command) => {
		document.execCommand(command, false, null);
		handleInput(); // Update state with new content
	};

	return (
		<div className="container">
			<h1 className="title">Google Docs Styled Text Area</h1>
			<div className="toolbar">
				<button onClick={() => applyFormatting("bold")} title="Bold">
					<b>B</b>
				</button>
				<button onClick={() => applyFormatting("italic")} title="Italic">
					<i>I</i>
				</button>
				<button onClick={() => applyFormatting("underline")} title="Underline">
					<u>U</u>
				</button>
			</div>
			<div
				className="text-area"
				contentEditable
				ref={textAreaRef}
				onInput={handleInput}
				placeholder="Type your text here..."
				suppressContentEditableWarning={true}
			/>
		</div>
	);
};

export default TextAreaComponent;
