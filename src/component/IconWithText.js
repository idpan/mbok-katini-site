import React from "react";

export default function IconWithText({
  color,
  children,
  text = "text here...",
}) {
  return (
    <div className="hstack gap-1 align-items-center">
      <div className=" icon ">{children}</div>
      <span className=" light-color">{text}</span>
    </div>
  );
}
