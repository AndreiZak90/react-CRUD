import { useState } from "react";
import arrow from "../icons/play.png";

export default function NewNote({ fn }) {
  const [value, setValue] = useState("");

  const upDate = (e) => {
    e.preventDefault();
    fn({
      id: Math.random,
      content: value,
    });
    setValue("");
  };
  return (
    <>
      <div className="new_box" onSubmit={upDate}>
        <form className="new_form">
          <div className="input_box">
            <p className="input_box_title">New Note</p>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="input_box_inp"
              required
            />
          </div>
          <button type="submit" className="new_form_btn">
            <img src={arrow} className="new_form_btn_img" />
          </button>
        </form>
      </div>
    </>
  );
}
