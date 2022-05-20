import { HTMLAttributes, RefObject } from "react";

import PostItem from "@components/Posts/PostItem/PostItem";

import { PostType, PostsType } from "@types";

import classes from "./PostList.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  posts: PostsType;
  remove: (post: PostType) => void;
  className?: string;
  ref?: RefObject<HTMLDivElement>;
}

function PostList({ posts, remove, className, ref }: Props) {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        There're no posts here
      </h1>
    );
  }

  return (
    <div ref={ref} className={`${classes["post-list"]} ${className}`}>
      {posts.map((post) => (
        <PostItem remove={remove} key={post.id} post={post}></PostItem>
      ))}
    </div>
  );
}

export default PostList;
