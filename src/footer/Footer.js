import React from "react";
import Clock from "../Clock";

export function Footer(props) {
  const footer = props.footermsg;
  const year = props.year;
  return (
    <div className="footer">
      {/* {props.year} &nbsp;
      {props.footermsg} */}
      {year} &nbsp;
      {footer}
      <Clock initial={new Date()} />
    </div>
  );
}
