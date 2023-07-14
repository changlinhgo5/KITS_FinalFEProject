import { Carousel } from "antd";
import React from "react";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import theme1 from "../../assets/theme1.jpg";
import theme2 from "../../assets/theme2.jpg";
import Title from "antd/es/typography/Title";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <>
      {/* <Title level={2} className={cx("title")}>
        Đặng Thái Sơn
      </Title> */}
      <Carousel
        className={cx("carousel")}
        dots={true}
        autoplay={true}
        pauseOnDotsHover={true}
        pauseOnFocus={true}
        infinite={true}
        draggable={true}
        autoplaySpeed={4000}
        initialSlide={0}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <div>
          <img className={cx("carousel__img")} src={theme1} alt="theme1" />
        </div>
        <div>
          <img className={cx("carousel__img")} src={theme2} alt="theme2" />
        </div>
      </Carousel>
    </>
  );
};

export default Home;
