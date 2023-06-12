import React, { ReactNode } from "react";

import "./Button.css";

type ButtonProps = { type?: "button" | "submit" | "reset"; children: ReactNode; onClick?: () => void };
const Button = ({ type = "button", children, onClick }: ButtonProps) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
