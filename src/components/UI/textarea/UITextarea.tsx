import React, { HTMLProps } from "react";
import classes from "./UIInput.module.css";

interface Props extends HTMLProps<HTMLTextAreaElement> {
  className?: string;
  placeholder?: string;
  value?: string | number;
}

const UITextarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (props: Props, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={`${classes.UITextarea} ${props.className}`}
      />
    );
  },
);

export default UITextarea;
