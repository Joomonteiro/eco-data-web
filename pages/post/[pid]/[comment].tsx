import { useRouter } from "next/router";

const PostWithComment = () => {
  const router = useRouter();
  const { pid, comment } = router.query;

  return (
    <>
      <p>Post: {pid}</p>
      <p>comment: {comment}</p>
    </>
  );
};

export default PostWithComment;
