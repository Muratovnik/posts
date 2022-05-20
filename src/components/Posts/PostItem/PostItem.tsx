import { useNavigate, useLocation } from "react-router-dom";

import UIButton from "@UI/button/UIButton";

import { PostType } from "@types";

import classes from "./PostItem.module.css";

interface Props {
  post: PostType;
  remove: (post: PostType) => void;
}

const PostItem = (props: Props) => {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className={classes.post}>
      <div className={classes.header}>
        <strong className={classes.title}>
          {props.post.id}. {props.post.title}
        </strong>
        <div className={classes.btns}>
          <UIButton
            type="button"
            onClick={() => {
              navigate(`${location.pathname}/${props.post.id}`);
            }}
          >
            Open
          </UIButton>
          <UIButton
            variant="secondary"
            onClick={(evt) => props.remove(props.post)}
            type="button"
          >
            Delete
          </UIButton>
        </div>
      </div>
      <div className={classes.text}>{props.post.body}</div>
    </div>
  );
};

export default PostItem;
