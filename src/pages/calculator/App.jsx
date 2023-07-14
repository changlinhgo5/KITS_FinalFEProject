import classNames from "classnames/bind";
import styles from "./App.module.scss";
import Button from "./button/index";
import Display from "./display/index";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import Title from "antd/es/typography/Title";

const cx = classNames.bind(styles);

function CalculatorPage() {
  const { i18n, t } = useTranslation();

  const [input, setInput] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [tempResult, setTempResult] = useState("");
  const [colorOperator, setColorOperator] = useState("");

  const addToInput = (value) => {
    setInput(String(input + value));
  };

  const addZeroToInput = () => {
    if (input !== "") {
      setInput(input + 0);
    }
  };

  const clearInput = () => {
    setInput("");
    setPreviousNumber("");
    setOperator("");
    setColorOperator("");
  };

  const negateInput = () => {
    if (input !== "") {
      setInput(String(-Number(input)));
    }
  };

  const sqrInput = () => {
    if (input !== "") {
      setInput(String(Number(input * input)));
    }
  };

  const decimalsInput = () => {
    if (input.indexOf(".") === -1) {
      setInput(input + ".");
    }
  };

  const deleteInput = () => {
    if (input !== "") {
      setInput(input.slice(0, -1));
    }
  };

  const handleOperator = (op) => {
    if (input !== "") {
      if (previousNumber !== "" && tempResult !== "") {
        const current = parseFloat(input);
        const previous = parseFloat(previousNumber);

        let computedResult = "";

        if (operator === "add") {
          computedResult = previous + current;
        } else if (operator === "subtract") {
          computedResult = previous - current;
        } else if (operator === "multiply") {
          computedResult = previous * current;
        } else if (operator === "divide") {
          // computedResult = (previous / current).toFixed(5);
          computedResult = previous / current;
        }

        setInput(computedResult.toString());
        setPreviousNumber(computedResult.toString());
      } else {
        setPreviousNumber(input);
      }

      setInput("");
      setOperator(op);
      setTempResult(input);
      setColorOperator(op);
    } else {
      setOperator(op);
      setColorOperator(op);
    }
  };

  const evaluate = () => {
    if (input !== "" && previousNumber !== "" && operator !== "") {
      const current = parseFloat(input);
      const previous = parseFloat(previousNumber);

      let computedResult = "";

      if (operator === "add") {
        computedResult = previous + current;
      } else if (operator === "subtract") {
        computedResult = previous - current;
      } else if (operator === "multiply") {
        computedResult = previous * current;
      } else if (operator === "divide") {
        // computedResult = (previous / current).toFixed(5);
        computedResult = previous / current;
      }

      setInput(computedResult.toString());
      setPreviousNumber(computedResult.toString());
      setOperator("");
      setTempResult("");
      setColorOperator("");
    }
  };

  return (
    <>
      <Title level={2}>{t("Calculator")}</Title>
      <div className={cx("main")}>
        <div className={cx("wrapper")}>
          <div className={cx("option")}>
            <FaBars className={cx("bar__icon")} />
          </div>

          <Display input={input} previous={previousNumber} />

          <div className={cx("group__button")}>
            <div className={cx("row")}>
              <Button onClick={() => deleteInput()}>
                <LuDelete />
              </Button>
              <Button onClick={clearInput}>c</Button>
              <Button onClick={() => sqrInput()}>x&sup2;</Button>
              <Button
                onClick={() => handleOperator("divide")}
                activeColorOperator={
                  colorOperator === "divide" ? cx("active") : ""
                }
              >
                &divide;
              </Button>
            </div>

            <div className={cx("row")}>
              <Button
                onClick={() => {
                  addToInput(7);
                }}
              >
                7
              </Button>
              <Button
                onClick={() => {
                  addToInput(8);
                }}
              >
                8
              </Button>
              <Button
                onClick={() => {
                  addToInput(9);
                }}
              >
                9
              </Button>
              <Button
                onClick={() => handleOperator("multiply")}
                activeColorOperator={
                  colorOperator === "multiply" ? cx("active") : ""
                }
              >
                &times;
              </Button>
            </div>

            <div className={cx("row")}>
              <Button
                onClick={() => {
                  addToInput(4);
                }}
              >
                4
              </Button>
              <Button
                onClick={() => {
                  addToInput(5);
                }}
              >
                5
              </Button>
              <Button
                onClick={() => {
                  addToInput(6);
                }}
              >
                6
              </Button>
              <Button
                onClick={() => handleOperator("subtract")}
                activeColorOperator={
                  colorOperator === "subtract" ? cx("active") : ""
                }
              >
                -
              </Button>
            </div>

            <div className={cx("row")}>
              <Button
                onClick={() => {
                  addToInput(1);
                }}
              >
                1
              </Button>
              <Button
                onClick={() => {
                  addToInput(2);
                }}
              >
                2
              </Button>
              <Button
                onClick={() => {
                  addToInput(3);
                }}
              >
                3
              </Button>
              <Button
                onClick={() => handleOperator("add")}
                activeColorOperator={
                  colorOperator === "add" ? cx("active") : ""
                }
              >
                +
              </Button>
            </div>

            <div className={cx("row")}>
              <Button onClick={() => negateInput()}>+/-</Button>
              <Button onClick={() => addZeroToInput()}>0</Button>
              <Button onClick={() => decimalsInput()}>.</Button>
              <Button onClick={() => evaluate()} isEqual={"!isEqual"}>
                =
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorPage;
