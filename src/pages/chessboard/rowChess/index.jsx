import styles from "./rowChess.module.scss";
import classNames from "classnames/bind";

import Cell from "../Cell";

const cx = classNames.bind(styles);

const RowChess = ({
  rowType,
  size,
  whiteColor,
  blackColor,
  isSwapped,
  onClick,
}) => {
  const cells = [];

  for (let i = 0; i < size; i++) {
    const isWhite = (i + rowType) % 2 === 0;
    cells.push(
      <Cell
        key={i}
        isWhite={isWhite}
        whiteColor={whiteColor}
        blackColor={blackColor}
        isSwapped={isSwapped}
        onClick={onClick}
      />
    );
  }

  return <div className={cx("row")}>{cells}</div>;
};

export default RowChess;
