import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  //const [filteredExpenseItem, setFilteredExpenseItem] = useState(props.items);

  const onChangeFilterHandler = (selectedYear) => {
    // console.log("In Expenses.js!");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
    // filteredExpenses.filter(
    //   (expenseItem) => expenseItem.date.getFullYear() === Number(selectedYear)
    // );
    //console.log(typeof props.items[0].date.getFullYear());
    //console.log(typeof selectedYear);
    //console.log(props.items[0].date.getFullYear() === Number(selectedYear));
    // setFilteredExpenseItem(
    //   //console.log(props.items)
    //   props.items.filter(
    //     (ExpenseItem) => ExpenseItem.date.getFullYear() === Number(selectedYear)
    //   )
    // );
  };

  // 컴포넌트에 데이터를 이미 가지고 있고, 데이터의 변경없이 렌더링만 변경하므로.. State 사용하지 않아도 됨.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === Number(filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={onChangeFilterHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
