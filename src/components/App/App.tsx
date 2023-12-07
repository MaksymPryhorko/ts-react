import React, { ChangeEvent, useState } from "react";

function Input() {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);

    console.log("Введений текст", event.target.value);
  };

  return (
    <>
      <p>Input something</p>
      <input type="text" value={text} onChange={handleTextChange}></input>
    </>
  );
}

export default Input;
