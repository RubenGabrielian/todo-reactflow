import React from "react";

export default function Flex({
  children,
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  flexWrap = "nowrap",
  style = {},
  className = "",
  ...props
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems,
        justifyContent,
        flexWrap,
        ...style,
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
