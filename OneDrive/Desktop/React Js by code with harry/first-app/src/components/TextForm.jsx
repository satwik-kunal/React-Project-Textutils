import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Hi, write something...");
  const [click, clickedText] = useState(1);
  const handelUpclick = () => {
    setText(text.toUpperCase());
  };
  const handelLoclick = () => {
    setText(text.toLowerCase());
  };
  const handelChange = (e) => {
    setText(e.target.value);
  };
  const emptyText = (e) => {
    if (click === 1) {
      setText("");
      clickedText(0);
    }
  };

  return (
    <>
      <div className="container mx-2">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.textHeading}
          </label>
          <textarea
            onChange={handelChange}
            onClick={emptyText}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handelUpclick}
        >
          Convert To UpperCase
        </button>
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={handelLoclick}
        >
          Convert To LowerCase
        </button>
        <button type="button" className="btn btn-info mx-2">
          UnDo
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p1>
          Words:{text.split(" ").length} Charecters:{text.length}
        </p1>
      </div>
      <div className="container">
        <h2>Preview</h2>
        <p>{text}</p>
        <p>Time Required To read: {0.008 * text.split(" ").length} Min</p>
      </div>
    </>
  );
}
