import { HTMLAttributes } from "react";

import classes from "./Comment.module.css";

export type CommentType = {
  id?: string | number;
  email: string;
  body: string;
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  comment: CommentType;
}

const Comment = ({ comment }: Props) => {
  return (
    <div className={classes["comment"]}>
      <div className={classes["title"]}>{comment.email}</div>
      <div className={classes["text"]}>{comment.body}</div>
    </div>
  );
};

export default Comment;
