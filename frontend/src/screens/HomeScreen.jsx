import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomeScreen.module.css";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import { useGetAllPostsQuery } from "../slices/postApiSlice";
import Post from "../components/Post";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();

  const { data: posts, isLoading, error } = useGetAllPostsQuery();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <>
      <NavBar home />
      <main className={styles["main-container"]}>
        <div className={styles["user-info"]}>
          <div className={styles["user-group"]}>
            <img
              className={styles["avatar"]}
              src={userInfo.avatar}
              alt="avatar"
            />
            <span className={styles["username"]}>{userInfo.username}</span>
          </div>
          <Button onClick={handleLogout}>Log out</Button>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className={styles["post-container"]}>
            {posts?.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default HomeScreen;
