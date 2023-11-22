import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../styles/components/Post.module.css";
import {
  useLikePostMutation,
  useUnlikePostMutation,
  useAddCommentMutation,
  useSavePostMutation,
  useUnsavePostMutation,
} from "../slices/postApiSlice";

const Post = ({ post }) => {
  const { likes, comments, saves } = post;

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [isLiked, setIsLiked] = useState(likes.includes(userInfo._id));
  const [isSaved, setIsSaved] = useState(saves.includes(userInfo._id));
  const [comment, setComment] = useState("");

  const [likePost] = useLikePostMutation();
  const [unlikePost] = useUnlikePostMutation();
  const [addComment] = useAddCommentMutation();
  const [savePost] = useSavePostMutation();
  const [unsavePost] = useUnsavePostMutation();

  const handleLike = async (id) => {
    try {
      await likePost(id).unwrap();
      setIsLiked(!isLiked);
      console.log("liked");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async (id) => {
    try {
      await unlikePost(id).unwrap();
      setIsLiked(!isLiked);
      console.log("unliked");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = async (id) => {
    try {
      await savePost(id).unwrap();
      setIsSaved(!isSaved);
      console.log("saved");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnsave = async (id) => {
    try {
      await unsavePost(id).unwrap();
      setIsSaved(!isSaved);
      console.log("unsaved");
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostComment = async (id) => {
    try {
      const res = await addComment({ postID: id, comment }).unwrap();
      setComment("");
      console.log("comment added");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div key={post._id} className={styles["post"]}>
      <div className={styles["user"]}>
        <img className={styles["avatar"]} src={post.user.avatar} alt="avatar" />
        <span className={styles["username"]}>{post.user.username}</span>
      </div>
      <div className={styles["post-image"]}>
        <img className={styles["image"]} src={post.image} alt="post" />
      </div>
      <div className={styles["post-actions"]}>
        <div className="left-actions">
          {isLiked ? (
            <svg
              onClick={() => handleUnlike(post._id)}
              aria-label="Unlike"
              className={styles["post-action"]}
              fill="red"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
          ) : (
            <svg
              onClick={() => handleLike(post._id)}
              aria-label="Like"
              className={styles["post-action"]}
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>
          )}

          <svg
            onClick={() => navigate(`/post/${post._id}`)}
            aria-label="Comment"
            className={styles["post-action"]}
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
          <svg
            aria-label="Share Post"
            className={styles["post-action"]}
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <line
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="22"
              x2="9.218"
              y1="3"
              y2="10.083"
            ></line>
            <polygon
              fill="none"
              points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polygon>
          </svg>
        </div>
        {isSaved ? (
          <svg
            onClick={() => handleUnsave(post._id)}
            aria-label="Remove"
            className={styles["post-action"]}
            fill="black"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
          </svg>
        ) : (
          <svg
            onClick={() => handleSave(post._id)}
            aria-label="Save"
            className={styles["post-action"]}
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></polygon>
          </svg>
        )}
      </div>
      <div className={styles["post-caption-container"]}>
        {post.likes.length > 0 && (
          <div className={styles["post-likes"]}>{likes.length} likes</div>
        )}
        <div className={styles["post-caption"]}>
          <span className={styles["post-username"]}>{post.user.username}</span>{" "}
          <span className={styles["post-caption-text"]}>{post.caption}</span>
        </div>
        {post.comments.length > 0 && (
          <p
            className={styles["view-comments"]}
            onClick={() => navigate(`/post/${post._id}`)}
            style={{ cursor: "pointer" }}
          >
            View all {comments.length} comments
          </p>
        )}
        <form className={styles["comment-form"]}>
          <input
            type="text"
            placeholder="Add a comment..."
            className={styles["comment-input"]}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {comment && (
            <span
              className={styles["post-submit"]}
              onClick={() => handlePostComment(post._id)}
            >
              Post
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Post;
