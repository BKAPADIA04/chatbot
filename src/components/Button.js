import React from "react";

export default function Button(props) {
  let { subject } = props;
  return (
    <>
      <div className="buttonClass mx-2">
        <button type="button" className="btn btn-outline-dark btn-rounded">
          {subject}
        </button>
      </div>
    </>
  );
}
