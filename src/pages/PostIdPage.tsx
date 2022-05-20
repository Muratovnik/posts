import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PostType } from "@types";

import PostService from "@API/PostService";
import { useFetching } from "@hooks/useFetching";

import PostSection from "@components/Posts/PostSection/PostSection";
import CommentsList from "@components/CommentsList/CommentsList";
import { CommentType } from "@components/Comment/Comment";
import Loader from "@components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState<PostType>({
    id: 0,
    title: "",
    body: "",
  });

  const [comments, setComments] = useState<CommentType[]>([]);

  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading] = useFetching(async (id) => {
    const response = await PostService.getComsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, [params.id]);

  return (
    <div>
      {isLoading ? (
        <Loader
          style={{
            marginRight: "auto",
            marginLeft: "auto",
          }}
        ></Loader>
      ) : (
        <PostSection
          title={`Post ${params.id}`}
          text={`${post.id}. ${post.title}`}
        ></PostSection>
      )}
      {isCommentsLoading ? (
        <Loader
          style={{
            marginTop: "50px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        ></Loader>
      ) : (
        <CommentsList items={comments}></CommentsList>
      )}
    </div>
  );
};

export default PostIdPage;
