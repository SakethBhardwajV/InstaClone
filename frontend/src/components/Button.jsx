import styles from "../styles/components/Button.module.css";
const Button = ({ children, disable, type = "submit", onClick }) => {
  return (
    <button
      className={styles["button"]}
      type={type}
      disabled={disable}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
