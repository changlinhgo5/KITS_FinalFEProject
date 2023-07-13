import { Modal, Select, Switch } from "antd";
import { FaMoon, FaSun } from "react-icons/fa6";
import { LANGUAGES } from "../../constants";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";
import styles from "./modalComponent.module.scss";

const cx = classNames.bind(styles);

const ModalComponent = ({
  isModalOpen,
  handleOk,
  handleCancel,
  handleThemeChange,
  onChangeLang,
}) => {
  const { i18n, t } = useTranslation();

  return (
    <Modal
      title={t("Settings")}
      width={"30rem"}
      open={isModalOpen}
      cancelText={t("Cancel")}
      okText={t("OK")}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className={cx("modal__row")}>
        <span className={cx("modal__label")}>{t("Theme")}: </span>
        <div className={cx("modal__select")}>
          <Switch
            className={cx("modal__switch")}
            checkedChildren={<FaMoon className={cx("modal__icon")} />}
            unCheckedChildren={<FaSun className={cx("modal__icon")} />}
            onChange={handleThemeChange}
          />
        </div>
      </div>

      <div className={cx("modal__row")}>
        <span className={cx("modal__label")}>{t("Language")}: </span>

        <Select
          className={cx("modal__select")}
          defaultValue={"ENG"}
          onSelect={onChangeLang}
        >
          {LANGUAGES.map((language) => (
            <Select.Option key={language.code} value={language.code}>
              <div className={cx("modal__option")}>
                <img src={language.icon} />
                <span>{language.label}</span>
              </div>
            </Select.Option>
          ))}
        </Select>
      </div>
    </Modal>
  );
};

export default ModalComponent;
