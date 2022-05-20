import { useState, useEffect } from "react";

import PostService from "@API/PostService";

import PostList from "@components/Posts/PostList/PostList";
import PostForm from "@components/Posts/PostForm/PostForm";
import PostFilter from "@components/Posts/PostFilter/PostFilter";

import Container from "@components/Container/Container";
import UIModal from "@UI/UIModal/UIModal";
import UIButton from "@UI/button/UIButton";
import Loader from "@UI/Loader/Loader";
import Pagination from "@UI/Pagination/Pagination";
import Title from "@components/Title/Title";

import { usePosts } from "@hooks/usePosts";
import { useFetching } from "@hooks/useFetching";
import { getPagesCount } from "@utils/pages";

import { PostType, FilterType, PostsType } from "@types";

import classes from "./PostsSection.module.css";

function Posts() {
  const [posts, setPosts] = useState<PostsType>([]);
  const [filter, setFilter] = useState<FilterType>({
    query: "",
    sort: "",
  });

  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost: PostType) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: PostType) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div className={classes["posts-section"]}>
      <Container>
        <div className={classes["container-inner"]}>
          <div className={classes["header"]}>
            <div className={classes["header-top"]}>
              <Title className={classes["posts-title"]}>Posts</Title>
              <UIButton
                className={classes["open-popup-btn"]}
                onClick={() => setIsModalVisible(true)}
              >
                Create a post
              </UIButton>
            </div>
            <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
          </div>

          {postError && (
            <h1 style={{ textAlign: "center", margin: "20px" }}>
              Error <br />
              <small>{postError}</small>
            </h1>
          )}
          {isPostLoading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
                marginBottom: "30px",
              }}
            >
              <Loader />
            </div>
          )}
          <PostList
            className={classes["list"]}
            remove={removePost}
            posts={sortedAndSearchedPosts}
          ></PostList>
          <Pagination
            className={classes["list-pagination"]}
            totalPages={totalPages}
            currentPage={page}
            changePage={changePage}
          ></Pagination>
        </div>
      </Container>
      <UIModal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
        <PostForm create={createPost}></PostForm>
      </UIModal>
    </div>
  );
}

export default Posts;
