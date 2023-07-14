import classNames from "classnames/bind";
import styles from "./quote.module.scss";
import { useEffect, useState } from "react";
import { Button, Card, Col, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

const QuotePage = ({ token }) => {
  const { i18n, t } = useTranslation();

  const [quotes, setQuotes] = useState([]);
  const [quotesNum, setQuotesNum] = useState(0);

  async function getNewQuotes() {
    const res = await fetch("http://localhost:3000/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({ num: quotesNum }),
    });

    // const response = await fetch("http://localhost:3000/authenticate", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: values.username,
    //     password: values.password,
    //   }),
    // });

    const data = await res.json();
    console.log(data);
    setQuotes(data);
  }

  return (
    <>
      {/* <Title level={2} className={cx("title")}>
        Quotes of the day:
      </Title> */}
      <Title level={2}>{t("Quotes")}</Title>
      <div className={cx("quote__action")}>
        <Input
          className={cx("quote__input")}
          type="number"
          value={quotesNum}
          onChange={(e) => setQuotesNum(e.target.value)}
        />
        <Button onClick={getNewQuotes}>New Quote</Button>
      </div>

      <Row gutter={16} className={cx("quote__row")}>
        {quotes.map((quote, index) => (
          <Col span={8} className={cx("quote__col")} key={index}>
            <Card title={quote.author} className={cx("quote__card")}>
              <p className={cx("quote__content")}>{quote.quote}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default QuotePage;
