import styles from "./cell.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Cell = ({ isWhite, whiteColor, blackColor, isSwapped, onClick }) => {
  const swap = isSwapped
    ? isWhite
      ? whiteColor
      : blackColor
    : isWhite
    ? blackColor
    : whiteColor;

  return (
    <div
      className={cx("cell")}
      style={{ backgroundColor: swap }}
      onClick={onClick}
    />
  );
};

export default Cell;
