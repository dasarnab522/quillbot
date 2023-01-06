import React from "react";
import './Third.css'
import Tleft from "./Tleft";
import Tright from "./Tright";

function Third() {
  return (
    <div className="thmain">
      <div className="thpera">
        <h1>Experience the full power of QuillBot </h1>
      </div>
      <div className="subs">
        <div className="left">
          <Tleft />
        </div>
        <div className="right">
          <Tright />
        </div>
      </div>
    </div>
  );
}

export default Third;
