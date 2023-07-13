import classNames from "classnames/bind";
import styles from "./display.module.scss";

const cx = classNames.bind(styles);

function Display({ input, previous }) {
  return (
    <>
      <div className={cx("display")}>
        <span className={cx("prev")}>{previous}</span>
        <span className={cx("input")}>{input}</span>
      </div>
    </>
  );
}

export default Display;
