import classNames from "classnames/bind";
import styles from "./modalSetting.module.scss";
import { FaXmark } from "react-icons/fa6";
const cx = classNames.bind(styles);

const ModalSetting = ({
  sessionTime,
  breakTime,
  setSessionTime,
  setBreakTime,
  // theme,
  // setTheme,
}) => {
  return (
    <>
      <div className={cx("content")}>
        <div className={cx("row__input")}>
          <div className={cx("col__input")}>
            <label htmlFor="session__input" className={cx("label")}>
              Session
            </label>
            <input
              id="session__input"
              type="number"
              className={cx("input")}
              min={1}
              value={sessionTime}
              onChange={(e) => {
                setSessionTime(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={cx("row__input")}>
          <div className={cx("col__input")}>
            <label htmlFor="break__input" className={cx("label")}>
              Break
            </label>
            <input
              id="break__input"
              type="number"
              className={cx("input")}
              min={1}
              value={breakTime}
              onChange={(e) => {
                setBreakTime(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSetting;
