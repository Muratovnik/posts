import { HTMLAttributes } from "react";

import Container from "@components/Container/Container";
import Comment, { CommentType } from "@components/Comment/Comment";

import classes from "./CommentsList.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: CommentType[];
}

const Comments = ({ items, className = "" }: Props) => {
  return (
    <div className={`${classes["comments-list"]} ${className}`}>
      <Container>
        <div className={classes["container-inner"]}>
          <div className={classes["title"]}>Comments</div>
          <div className={classes["inner-list"]}>
            {items.map((comm) => (
              <Comment key={comm.id} comment={comm}></Comment>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Comments;
