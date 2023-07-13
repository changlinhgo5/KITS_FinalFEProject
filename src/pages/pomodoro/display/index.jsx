import classNames from "classnames/bind";
import styles from "./display.module.scss";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

const Display = ({ sessionTime, breakTime }) => {
  const [timeSession, setTimeSession] = useState(sessionTime); // time session
  const [isActive, setIsActive] = useState(false); // co dang dem nguoc khong
  const [isSession, setIsSession] = useState(true); // session or break mode
  // const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    let timer;

    if (isActive && timeSession > 0) {
      timer = setInterval(() => {
        setTimeSession((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeSession === 0) {
      // thoi gian = 0 doi trang thai
      setIsSession((prevSession) => !prevSession);
      setTimeSession(isSession ? breakTime : sessionTime);
    }

    return () => clearInterval(timer);
  }, [isActive, timeSession, isSession, sessionTime, breakTime]);

  const handlePauseResume = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={cx("display")}>
      <div className={cx("display__time")}>
        <div
          className={cx("progress", `${isSession}`)}
          // style={{ height: `${progressPercentage}%` }}
        >
          <div className={cx("session__title")}>
            {isSession ? "Session" : "Break"}
          </div>
          <div className={cx("time__remaining")}>{formatTime(timeSession)}</div>
        </div>
      </div>

      <button onClick={handlePauseResume} className={cx("display__button")}>
        {isActive ? "Pause" : "Resume"}
      </button>
    </div>
  );
};

export default Display;
