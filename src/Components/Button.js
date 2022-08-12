import styles from "./Button.module.css";
import PropTypes from "prop-types";

Btn.propTypes = {
  text: PropTypes.string.isRequired,
};
function Btn({ text, onClick }) {
  return (
    <>
      <button onClick={onClick} className={styles.main}>
        {text}
      </button>
    </>
  );
}

export default Btn;
