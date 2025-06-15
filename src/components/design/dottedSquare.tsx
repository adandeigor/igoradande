import React from "react";

type DottedSquareProps = {
  color: string;
  size: number;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
};

const DottedSquare: React.FC<DottedSquareProps> = ({ color, size, position }) => {
  const { top, right, bottom, left } = position;

  return (
    <div
      style={{
        position: "absolute",
        top,
        right,
        bottom,
        left,
        width: size,
        height: size,
        backgroundImage: `radial-gradient(${color} 10%, transparent 10%)`,
        backgroundSize: "10px 10px",
      }}
    />
  );
};

export default DottedSquare;