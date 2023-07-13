import classNames from "classnames/bind";
import styles from "./button.module.scss";

const cx = classNames.bind(styles);

function Button({ children, onClick, isEqual = "", activeColorOperator }) {
  return (
    <>
      <div
        className={cx("button", `${isEqual}`, activeColorOperator)}
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
}

export default Button;
