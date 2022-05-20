import { HTMLAttributes } from "react";

import classes from "./PostSection.module.css";

import Title from "@components/Title/Title";
import Container from "@components/Container/Container";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  text: string;
}

const PostSection = ({ title, text }: Props) => {
  return (
    <div className={classes["post-section"]}>
      <Container>
        <Title className={classes["section-title"]}>{title}</Title>
        <div className={classes["text"]}>{text}</div>
      </Container>
    </div>
  );
};

export default PostSection;
