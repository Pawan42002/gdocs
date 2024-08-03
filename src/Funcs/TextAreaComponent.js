import React, { useState, useRef } from "react";
import "./TextAreaComponent.css"; // Import the CSS file for styling

const TextAreaComponent = () => {
	const [text, setText] = useState("");
	const textAreaRef = useRef(null);
	const [bold, setBold] = useState(false);
	const [italic, setitalic] = useState(false);
	const [underline, setUnderline] = useState(false);
	const handleInput = () => {
		setText(textAreaRef.current.innerHTML); // this text will be set using api key from backend
	};

	const handleBold = () => {
		setBold(!bold);
	};

	const handleItalic = () => {
		setitalic(!italic);
	};

	const handleUnderline = () => {
		setUnderline(!underline);
	};

	return (
		<div className="container">
			<h1 className="title">Google Docs Styled Text Area</h1>
			<div className="toolbar">
				<button onClick={handleBold}>
					<b>B</b>
				</button>
				<button onClick={handleItalic}>
					<i>I</i>
				</button>
				<button onClick={handleUnderline}>
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
