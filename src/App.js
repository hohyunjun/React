import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  /*
  기존 javascript 는 명령적(imperative)인 방식
  const para = document.createElement('p');
  para.textContent = 'This is visible'
  document.getElementById('root').append(para);

  굉장히 번거롭고 하나하나 신경쓰기 어려움
  react 는 최종상태를 정의하기만 하면 뒷단에서 알아서 생성함.
  선언적(Declarative)인 방식 
  */

  const addExpenseHandler = (expense) => {
    //setExpenses([expense, ...expenses]); --> 이렇게 상태를 업데이트 하는 것은 적절하지 않음. 이전 상태의 snapshot 에 상태를 update 해야 함.
    /* prevExpenses 함수는 자동으로 최신 상태의 스냅샷을 받게 됨  */
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
