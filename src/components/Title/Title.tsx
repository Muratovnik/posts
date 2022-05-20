import { ReactNode } from "react";

import classes from "./Title.module.css";

interface Props {
  children?: ReactNode;
  className?: string;
}

const Title = ({ children, className = "" }: Props) => {
  return <div className={`${classes.title} ${className}`}>{children}</div>;
};

export default Title;
