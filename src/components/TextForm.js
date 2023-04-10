import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case Button clicked" + text)
    // setText('Text Value have changed')

    let newText = text.toUpperCase();
    setText(newText);
    localStorage.setItem("Text", text);
  };
  const handleLowClick = () => {
    // console.log('Lower button have clicked')
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const handleRemClick = () => {
    // console.log('remove btn have clicked')
    setText("");
  };
  const handleUndoClick = () => {
    console.log("Undo btn fired");
    let getText = localStorage.getItem("Text");
    setText(getText);
  };

  const handleOnChange = (event) => {
    // console.log('HandleOnChange triggered')
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <div className="container" style={{color : props.mode==='dark'?'white' :'black'}}>
      <h1 className="my-3" >{props.heading}</h1>
      <div className="mb-3">
        <textarea style={{backgroundColor : props.mode==='dark'?'#262626' :'white',color: props.mode==='dark'?'white':'black'}}
          onChange={handleOnChange}
          className="form-control"
          value={text}
          id="myBox"
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-5" onClick={handleLowClick}>
        LowerCase
      </button>
      <button className="btn btn-primary" onClick={handleRemClick}>
        RemoveText
      </button>
      <button className="btn btn-primary mx-5" onClick={handleUndoClick}>
        UndoText
      </button>
      <div className={`container my-4 text-${props.mode==='light'?'dark' :'light'}`}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length} Minute take to read text.</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
