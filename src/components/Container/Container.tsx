import { ReactNode } from "react";

import classes from "./Container.module.css";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
