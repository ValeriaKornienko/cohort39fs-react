import {useState} from "react";
import "./styles.css";
import Button from "../Button/Button";

function Counter() {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);

  const onPlus = () => {
    setCount((prevValue) => {return prevValue + 1});
  };
  const onMinus = () => {
    setCount((prevValue) => {return prevValue - 1});
  }
  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;