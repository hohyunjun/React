import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    // console.log(newExpenseContent);
    // newExpenseContent = (
    //   <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    // );
    // console.log(newExpenseContent);
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEditing={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
