import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/NewPostScreen.module.css";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import {
  useCreatePostMutation,
  useUploadPostImageMutation,
} from "../slices/postApiSlice";

const NewPostScreen = () => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const navigate = useNavigate();

  const [createPost, { isLoading, error }] = useCreatePostMutation();
  const [uploadPostImage, { isLoading: isUploading }] =
    useUploadPostImageMutation();

  const uploadFileHandler = async (e) => {
    let formData = new FormData();
    formData.append("image", e.target.files[0]);
    // formData = { ...formData, image: e.target.files[0] };
    try {
      const res = await uploadPostImage(formData).unwrap();
      setImage(res.image);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await createPost({ image, caption }).unwrap();
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar newPost />
      <main className={styles["main-container"]}>
        <div className={styles["upload-container"]}>
          <h2 className={styles["upload-header"]}>Create a post</h2>
          <form className={styles["upload-form"]} onSubmit={submitHandler}>
            <div className={styles["form-group"]}>
              <label className={styles["label"]} htmlFor="image">
                Upload Image
              </label>
              <input
                className={styles["image-upload"]}
                type="file"
                name="image"
                id="image"
                onChange={uploadFileHandler}
              />
            </div>
            <div className={styles["form-group"]}>
              <label className={styles["label"]} htmlFor="caption">
                Caption
              </label>
              <textarea
                className={styles["caption-input"]}
                type="text"
                name="caption"
                id="caption"
                rows="5"
                placeholder="Write a caption..."
                onChange={(e) => setCaption(e.target.value)}
                value={caption}
              />
            </div>
            <Button>Post</Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default NewPostScreen;
