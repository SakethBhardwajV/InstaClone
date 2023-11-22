import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/RegisterScreen.module.css";
import Button from "../components/Button";
import { useRegisterMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [register, { isLoading, error }] = useRegisterMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    try {
      const res = await register({
        email,
        name,
        username: trimmedUsername,
        password,
      }).unwrap();
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
          <p className={styles["description"]}>
            Sign up to see photos and videos from your friends.
          </p>
          <Button disable={false} type="button">
            Log in with Facebook
          </Button>
          <div className={styles["or-container"]}>
            <span className={styles["line"]}></span>
            <span className={styles["or"]}>or</span>
            <span className={styles["line"]}></span>
          </div>
          <form className={styles["form"]} onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="Email"
              className={styles["input"]}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Full Name"
              className={styles["input"]}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <p className={styles["terms"]}>
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </p>
            <p className={styles["terms"]}>
              By signing up, you agree to our Terms, Data Policy and Cookies
              Policy
            </p>
            {isLoading ? (
              <Button disable>Loading...</Button>
            ) : error ? (
              <p>{error.error}</p>
            ) : (
              <Button disable={!username || !password || !email || !name}>
                Sign up
              </Button>
            )}
          </form>
        </div>
        <div className={styles["register"]}>
          Have an account?{" "}
          <Link to="/login" className={styles["sign-up"]}>
            Log in
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

export default RegisterScreen;
