import { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./UIBtutton.module.css";

type ButtonVariants = "secondary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariants;
}

const UIButton = ({ children, ...props }: Props) => {
  const rootClass = props.variant || "";

  return (
    <button
      {...props}
      className={`${classes.UIButton} ${classes[rootClass] || ""} ${
        props.className || ""
      }`}
    >
      {children}
    </button>
  );
};

export default UIButton;
