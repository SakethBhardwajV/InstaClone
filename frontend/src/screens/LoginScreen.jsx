import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../styles/LoginScreen.module.css";
import Button from "../components/Button";
import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/userApiSlice";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    try {
      const res = await login({ username: trimmedUsername, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["form-container"]}>
          <img
            className={styles["logo"]}
            src="/instagram-text-icon.png"
            alt="logo"
          />
          <form className={styles["form"]} onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Username"
              className={styles["input"]}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles["input"]}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isLoading ? (
              <Button disable>Loading...</Button>
            ) : error ? (
              <p>{error.error}</p>
            ) : (
              <Button disable={!username || !password}>Log in</Button>
            )}

            <div className={styles["or-container"]}>
              <span className={styles["line"]}></span>
              <span className={styles["or"]}>or</span>
              <span className={styles["line"]}></span>
            </div>

            <Link to="#" className={styles["facebook-button"]}>
              Log in with Facebook
            </Link>
            <Link to="#" className={styles["forgot-password"]}>
              Forget password?
            </Link>
          </form>
        </div>
        <div className={styles["register"]}>
          Dont have an account?{" "}
          <Link to="/register" className={styles["sign-up"]}>
            Sign up
          </Link>
        </div>
        <div className={styles["apps"]}>
          <p className={styles["apps-title"]}>Get the app.</p>
          <div className={styles["app-icons"]}>
            <img
              className={`${styles["app-icon"]} ${styles["app-icon--android"]}`}
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="android"
            />
            <img
              className={`${styles["app-icon"]} ${styles["app-icon--ios"]}`}
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt="ios"
            />
          </div>
        </div>
      </div>
      <div className={styles["footer"]}>
        <span className={styles["language"]}>English</span>
        <span className={styles["copyright"]}>
          &copy; 2023 Instagram from Meta
        </span>
      </div>
    </>
  );
};

export default LoginScreen;
