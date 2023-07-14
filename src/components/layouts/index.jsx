import {
  Avatar,
  Button,
  Dropdown,
  Image,
  Input,
  Layout,
  Menu,
  Space,
} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaQuoteLeft } from "react-icons/fa";
import {
  FaArrowRightFromBracket,
  FaCalculator,
  FaChessKnight,
  FaClock,
  FaFileLines,
  FaGear,
  FaHouseChimney,
  FaMagnifyingGlass,
  FaRegBell,
  FaRegMessage,
  FaUser,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import fallbackAvatar from "../../assets/fallback-avatar.jpg";
import logo from "../../assets/logo1.png";
import smallLogo from "../../assets/smallLogo.png";
import { themeDark, themeLight } from "../../constants";
import DrawerComponent from "../drawer";
import ModalComponent from "../modal";
import styles from "./defaultLayout.module.scss";

const cx = classNames.bind(styles);

const baseUrl = import.meta.env.BASE_URL;

const DefaultLayout = ({ children, theme, setTheme, setToken, token }) => {
  let location = useLocation();
  const { i18n, t } = useTranslation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const [theme, setTheme] = useState("light");

  const onCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleThemeChange = (checked) => {
    // const newTheme = checked ? "dark" : "light";
    // setTheme(newTheme);
    const newTheme = checked ? themeDark : themeLight;
    setTheme(newTheme);
  };

  const onChangeLang = (value) => {
    i18n.changeLanguage(value);
  };

  const handleClickMenuItem = (e) => {
    setCurrentPath(e.key);
  };

  const handleLogOut = () => {
    setToken(null);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { token });
    }
    return child;
  });

  const itemsMenu = [
    {
      key: "/",
      label: <Link to={`${baseUrl}/`}>{t("Home")}</Link>,
      icon: <FaHouseChimney />,
    },
    {
      key: "/chessboard",
      label: <Link to={`${baseUrl}/chessboard`}>{t("Chessboard")}</Link>,
      icon: <FaChessKnight />,
    },
    {
      key: "/pomodoro",
      label: <Link to={`${baseUrl}/pomodoro`}>{t("Pomodoro")}</Link>,
      icon: <FaClock />,
    },
    {
      key: "/calculator",
      label: <Link to={`${baseUrl}/calculator`}>{t("Calculator")}</Link>,
      icon: <FaCalculator />,
    },
    {
      key: "/forminfo",
      label: <Link to={`${baseUrl}/forminfo`}>{t("Form")}</Link>,
      icon: <FaFileLines />,
    },
    {
      key: "/quote",
      label: <Link to={`${baseUrl}/quotes`}>{t("Quotes")}</Link>,
      icon: <FaQuoteLeft />,
    },
  ];

  const items = [
    {
      key: 1,
      label: <div onClick={showDrawer}>{t("Profile")}</div>,
      icon: <FaUser />,
    },
    {
      key: 2,
      label: <div onClick={showModal}>{t("Settings")}</div>,
      icon: <FaGear />,
    },
    {
      key: "/authenticate",
      label: <div onClick={handleLogOut}>{t("Log out")}</div>,
      icon: <FaArrowRightFromBracket />,
    },
  ];

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={240}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            zIndex: "5",
            left: 0,
            top: 0,
            bottom: 0,
            borderInlineEnd:
              theme == themeLight
                ? "1px solid rgba(5, 5, 5, 0.08)"
                : "1px solid rgba(253, 253, 253, 0.12)",
          }}
          className={cx("sider", theme == themeLight ? "light" : "dark")}
          theme={theme == themeLight ? "light" : "dark"}
        >
          <div
            className={cx(theme == themeLight ? "logo__light" : "logo__dark")}
          >
            <Image
              src={!collapsed ? logo : smallLogo}
              className={cx("logo__img")}
              preview={false}
              alt="logo"
              height={"60px"}
              width={"100%"}
            ></Image>
            <a className={cx("logo__link")} href="#"></a>
          </div>

          <Menu
            className={cx("menu__container")}
            defaultSelectedKeys={[currentPath]}
            mode="inline"
            items={itemsMenu}
            onClick={handleClickMenuItem}
            selectedKeys={[currentPath]}
          />
        </Sider>

        <Layout className={cx("site-layout")}>
          <Header
            className={cx(
              "site__header",
              theme == themeLight ? "logo__light" : "logo__dark"
            )}
          >
            <div className={cx("header__wrapper")}>
              <Space className={cx("searchBox")}>
                <Button className="searchButton">
                  <FaMagnifyingGlass />
                </Button>
                <Input
                  className={cx("searchInput")}
                  type="text"
                  placeholder={t("Search")}
                />
              </Space>

              <div className={cx("header__right")}>
                <div className={cx("header__option")}>
                  <FaRegMessage className={cx("header__icon")} />
                </div>
                <div className={cx("header__option")}>
                  <FaRegBell className={cx("header__icon")} />
                </div>
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement={"bottomRight"}
                >
                  <div className={cx("avatar__wrapper")}>
                    <Avatar
                      className={cx("admin__img")}
                      src={fallbackAvatar}
                      alt="avatar"
                    />
                    <span>Đặng Thái Sơn</span>
                  </div>
                </Dropdown>
              </div>
            </div>
          </Header>

          <Content>
            <div className={cx("site-layout-background")}>
              {childrenWithProps}
            </div>
          </Content>
          <Footer className={cx("site__footer")}>
            All In One ©2023 {t("by")} Đặng Thái Sơn
          </Footer>
        </Layout>
      </Layout>

      <ModalComponent
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleThemeChange={handleThemeChange}
        onChangeLang={onChangeLang}
      />

      <DrawerComponent
        isDrawerOpen={isDrawerOpen}
        onCloseDrawer={onCloseDrawer}
        token={token}
      />
    </>
  );
};

export default DefaultLayout;
