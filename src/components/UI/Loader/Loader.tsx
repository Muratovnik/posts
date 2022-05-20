import { HTMLAttributes } from "react";

import classes from "./Loader.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Loader = ({ className = "", style }: Props) => {
  return <div style={style} className={`${classes.loader} ${className}`}></div>;
};

export default Loader;
