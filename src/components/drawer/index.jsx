import { Col, Drawer, Row } from "antd";
import Title from "antd/es/typography/Title";
import jwtDecode from "jwt-decode";
import { useMemo } from "react";

const DrawerComponent = ({ onCloseDrawer, isDrawerOpen, token }) => {
  const information = useMemo(() => jwtDecode(token), [token]);
  return (
    <Drawer
      width={600}
      placement="right"
      closable={true}
      onClose={onCloseDrawer}
      open={isDrawerOpen}
    >
      <Title level={2}>User Profile</Title>
      <Row>
        <Col span={24}>
          <Title level={5}>Full Name: Đặng Thái Sơn</Title>
        </Col>
        <Col span={24}>
          <Title level={5}>Account: {information.username}</Title>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Title level={5}>City: Ha Noi</Title>
        </Col>
        <Col span={12}>
          <Title level={5}>Position: {information.position}</Title>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Title level={5}>Birthday: June 18,2001</Title>
        </Col>
        <Col span={12}>
          <Title level={5}>Copany: {information.company}</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title level={5}>
            Message: Make things as simple as possible but no simpler.
          </Title>
        </Col>
      </Row>
    </Drawer>
  );
};

export default DrawerComponent;
