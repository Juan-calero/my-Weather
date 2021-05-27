import React from "react";

function InfoBar({ xmlns, width, height, viewBox, d }) {
  return (
    <div className="content__bar">
      <svg
        xmlns={xmlns}
        width={width}
        height={height}
        viewBox={viewBox}
        className="content__bar--icon"
      >
        <path d={d} />
      </svg>
      <p>Hello</p>
    </div>
  );
}

export default InfoBar;
