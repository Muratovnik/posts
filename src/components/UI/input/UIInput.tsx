import React, { HTMLProps } from "react";
import classes from "./UIInput.module.css";

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  value?: string | number;
}

const UIInput = React.forwardRef<HTMLInputElement, Props>(
  (props: Props, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`${classes.UIInput} ${props.className}`}
      />
    );
  },
);

export default UIInput;
