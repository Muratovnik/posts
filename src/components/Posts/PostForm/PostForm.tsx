import { useState } from "react";

import { PostType } from "@types";

import UIButton from "@UI/button/UIButton";
import UIInput from "@UI/input/UIInput";

import classes from "./PostForm.module.css";

interface Props {
  create: (post: PostType) => void;
}

const PostForm = ({ create }: Props) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (evt: any) => {
    evt.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);

    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <form className={classes["post-form"]}>
      <div className={classes["title"]}>Create a post!</div>
      <div className={classes["fields"]}>
        <UIInput
          type="text"
          value={post.title}
          placeholder="Title"
          onChange={(e) =>
            setPost({ ...post, title: (e.target as HTMLInputElement).value })
          }
        />
        <UIInput
          type="text"
          placeholder="Description"
          value={post.body}
          onChange={(e) =>
            setPost({ ...post, body: (e.target as HTMLInputElement).value })
          }
        />
      </div>

      <UIButton className={classes["submit-button"]} onClick={addNewPost}>
        Create a post
      </UIButton>
    </form>
  );
};

export default PostForm;
