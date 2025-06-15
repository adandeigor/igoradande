import React from "react";
import clsx from "clsx";

type LinerProps = {
  text?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "bold" | "semibold" | "regular" | "extrabold";
  variant?: "dark" | "primary" | "secondary" | "default" | "gray";
};

const Liner: React.FC<LinerProps> = ({
  text,
  className,
  size = "md",
  weight = "semibold",
  variant = "primary",
}) => {
  const textClasses = clsx(
    `text-${size}`,
    `font-${weight === "regular" ? "normal" : weight}`,
    `text-${variant}`,
    "font-jura"
  );

  const underlineClasses = clsx(
    "absolute left-0 bottom-0 w-full h-[2px] rounded",
    `bg-${variant}`
  );

  const hrClasses = clsx(`w-full border-${variant}`, className);

  if (text) {
    return (
      <div className={clsx("inline-block relative", className)}>
        <span className={textClasses}>{text}</span>
        <span className={underlineClasses}></span>
      </div>
    );
  }

  return <hr className={hrClasses} />;
};

export default Liner;
