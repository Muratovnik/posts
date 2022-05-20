import { useMemo } from "react";

import { PostType, SortType, PostsType } from "../types/index";

export const useSortedPosts = (posts: PostsType, sort: SortType) => {
  const sortedPosts = useMemo(() => {
    return sort
      ? [...posts].sort((a: PostType, b: PostType) => a[sort].localeCompare(b[sort]))
      : posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts: PostsType, sort: SortType, query: string) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
