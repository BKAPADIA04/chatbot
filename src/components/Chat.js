import React from "react";
import "./chat.css";
import ClusterButton from "./ClusterButton";
import Input from "./Input";

export default function Chat(props) {
  return (
    <div>
      <div className="chatbox">
        {props.texts.map((text) => {
          return (
            <div
              className="bg-text"
              id={props.name === text.name ? "you" : "other"}
            >
              <div className="text" key={text.message}>
                <div
                  className="mx-2"
                  style={{
                    textAlign: "left",
                    fontSize: "11px",
                    color: "rgba(228, 184, 5, 0.76)",
                  }}
                >
                </div>
                {text.message}
                <div key={text.message}>
                  <div
                    className="mx-2"
                    style={{
                      textAlign: "right",
                      fontSize: "11px",
                      color: "rgba(228, 184, 5, 0.76)",
                    }}
                  >
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <input
          id="Input"
          type="text"
          placeholder="Message..."
          value={props.message}
          onChange={props.onChangeHandler}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              props.onClickHandler();
            }
          }}
        ></input>
        <i
          className="fa-solid fa-paper-plane fa-beat fa-lg sendArrow"
          onClick={props.onClickHandler}
        ></i>
      </div>
    </div>
  );
}
