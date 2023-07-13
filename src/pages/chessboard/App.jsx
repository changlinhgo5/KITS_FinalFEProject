import styles from "./App.module.scss";
import classNames from "classnames/bind";
import ChessBoard from "./chessBoard/index";
import { useState } from "react";
import { Card, Typography } from "antd";
const { Text } = Typography;

const cx = classNames.bind(styles);

function ChessBoardPage() {
  const [size, setSize] = useState(0);
  const [whiteColor, setWhiteColor] = useState("#ffffff");
  const [blackColor, setBlackColor] = useState("#7a7a7a");
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSetSize = (e) => {
    setSize(Number(e.target.value));
  };

  const handleWhiteColor = (e) => {
    setWhiteColor(e.target.value);
    console.log("white color is: " + e.target.value);
  };

  const handleBlackColor = (e) => {
    setBlackColor(e.target.value);
    console.log("black color is: " + e.target.value);
  };

  const handleSwappedColor = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <>
      <Card className={cx("wrapper")}>
        <form action="" className={cx("form")}>
          <h1 className={cx("title")}>hello Son</h1>
          <div className={cx("input__wrapper")}>
            <label className={cx("label")}>Size</label>
            <input
              className={cx("input")}
              type="number"
              onChange={(e) => handleSetSize(e)}
            />
          </div>

          <div className={cx("input__wrapper")}>
            <Text className={cx("label")}>Color</Text>
            <div className={cx("input")}>
              <input
                className={cx(`input__white`)}
                value={`${whiteColor}`}
                type="color"
                onChange={handleWhiteColor}
              />
              <input
                className={cx("input__black")}
                value={`${blackColor}`}
                type="color"
                onChange={handleBlackColor}
              />
            </div>
          </div>
        </form>

        <ChessBoard
          size={size}
          whiteColor={whiteColor}
          blackColor={blackColor}
          isSwapped={isSwapped}
          onClick={handleSwappedColor}
        />
      </Card>
    </>
  );
}

export default ChessBoardPage;
