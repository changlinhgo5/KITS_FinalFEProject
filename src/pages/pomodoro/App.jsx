import classNames from "classnames/bind";
import { FaGear } from "react-icons/fa6";
import styles from "./App.module.scss";
import Display from "./display/index";
import { useState, useEffect } from "react";
import ModalSetting from "./modalSetting/index";
import Modal from "antd/es/modal/Modal";
import Title from "antd/es/typography/Title";

const cx = classNames.bind(styles);

function PomodoroPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionTime, setSessionTime] = useState(12);
  const [breakTime, setBreakTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={cx("main")}>
        <div className={cx("bc")}></div>
        <div className={cx("header")}>
          <Title className={cx("setting")}>
            <FaGear className={cx("setting__icon")} onClick={showModal} />
          </Title>
        </div>
        <div className={cx("title")}>
          <Title level={1}>Pomodoro Clock</Title>
        </div>

        <Title className={cx("date__now")}>
          {currentTime.toLocaleTimeString()}
        </Title>
        <Display sessionTime={sessionTime} breakTime={breakTime}></Display>
      </div>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <ModalSetting
          sessionTime={sessionTime}
          setSessionTime={setSessionTime}
          breakTime={breakTime}
          setBreakTime={setBreakTime}
        />
      </Modal>
    </>
  );
}

export default PomodoroPage;
