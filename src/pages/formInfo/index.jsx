import classNames from "classnames/bind";
import styles from "./formInfo.module.scss";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Select,
  Typography,
} from "antd";
import { FaEnvelope, FaMarsAndVenus, FaUser } from "react-icons/fa6";
import React, { useState } from "react";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

const genders = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const FormInfo = () => {
  const { i18n, t } = useTranslation();

  const [form] = Form.useForm();
  const [textInfo, setTextInfo] = useState({});

  const onFinish = (values) => {
    console.log("Success:", values);

    const formattedValues = {
      ...values,
      birth: values.birth.format("DD-MM-YYYY"),
    };

    setTextInfo(formattedValues);
  };

  const handleClearText = () => {
    form.resetFields();
    setTextInfo({});
  };

  return (
    <>
      <Title level={2}>{t("Form")}</Title>
      <Card className={cx("form__wrapper")}>
        <Title level={2} className={cx("title")}>
          Form Infomation
        </Title>

        <Form
          form={form}
          name="normal_login"
          className={cx("form__info")}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input
              prefix={<FaUser className={cx("input__icon")} />}
              placeholder="name"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<FaEnvelope className={cx("input__icon")} />}
              type="email"
              placeholder="email"
            />
          </Form.Item>

          <Form.Item
            name="gender"
            rules={[
              {
                required: true,
                message: "Please input your gender!",
              },
            ]}
          >
            <Select
              // allowClear
              optionLabelProp="label"
              placeholder={
                <React.Fragment>
                  <FaMarsAndVenus
                    className={cx("site-form-item-icon input__icon")}
                  />
                  &nbsp;gender
                </React.Fragment>
              }
            >
              {genders?.map((data) => (
                <Select.Option
                  value={data.value}
                  key={data.value}
                  label={
                    <React.Fragment>
                      <FaMarsAndVenus
                        className={cx("site-form-item-icon input__icon")}
                      />
                      &nbsp;
                      {data.label}
                    </React.Fragment>
                  }
                >
                  {data.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="birth"
            className={cx("birth__input")}
            rules={[
              {
                required: true,
                message: "Please input your birth!",
              },
            ]}
          >
            <DatePicker placeholder="birth" format={"DD-MM-YYYY"} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={cx("form__button")}
            >
              Submit
            </Button>

            <Button
              type="default"
              className={cx("form__button")}
              onClick={handleClearText}
            >
              Clear
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Title level={5} className={cx("info__show")}>
        {Object.entries(textInfo).length !== 0 ? (
          <div>
            <div>Name: {textInfo.name}</div>
            <div>Email: {textInfo.email}</div>
            <div>Gender: {textInfo.gender}</div>
            <div>Birth: {textInfo.birth}</div>
          </div>
        ) : (
          <></>
        )}
      </Title>
    </>
  );
};

export default FormInfo;
