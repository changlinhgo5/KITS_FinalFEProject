import styles from "./chessBoard.module.scss";
import classNames from "classnames/bind";
import RowChess from "../rowChess";

const cx = classNames.bind(styles);

const ChessBoard = ({ size, whiteColor, blackColor, isSwapped, onClick }) => {
  const rows = [];

  for (let i = 0; i < size; i++) {
    const rowType = i % 2 === 0 ? 0 : 1;
    rows.push(
      <RowChess
        key={i}
        rowType={rowType}
        size={size}
        whiteColor={whiteColor}
        blackColor={blackColor}
        isSwapped={isSwapped}
        onClick={onClick}
      />
    );
  }

  return <div className={cx("chessboard")}>{rows}</div>;
};

export default ChessBoard;
