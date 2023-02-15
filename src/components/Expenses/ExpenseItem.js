import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // 왜 상수인가?
  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated!"); // 해당 함수를 호출하는 것은 단순히 변수만 받는 것이 아니라, State 가 등록된 컴포넌트를 다시 Evaluate 하도록 한다.
  //   console.log(title);
  // };
  /* 반드시 한 개의 JSX 요소만 return 해야 한다 */
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
