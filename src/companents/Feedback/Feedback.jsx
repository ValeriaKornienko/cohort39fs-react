import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  let [likeCount, setLikeCount] = useState(0);
  const plus = () => {
    setLikeCount((prevValue) => {
      return prevValue + 1;
    });
  };

  let [dislikeCount, setDislikeCount] = useState(0);
  const minus = () => {
    setDislikeCount((prevValue) => {
      return prevValue - 1;
    });
  };

  const countReset = () => {
    setLikeCount(0);
    setDislikeCount(0);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button
          className="like"
          type="submit"
          onClick={plus} />
      </div>
      <p className="likeCount">{likeCount}</p>
      <div className="button-control">
        <Button
          className="dislike"
          type="submit"
          onClick={minus}
        />
      </div>
      <p className="dislikeCount">{dislikeCount}</p>
      <div className="button-control">
        <Button
          classname="reset"
          name="Reset"
          type="reset"
          onClick={countReset}
        />
      </div>
    </div>
  );
}
export default Feedback;
