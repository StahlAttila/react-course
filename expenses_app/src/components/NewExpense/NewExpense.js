import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };

  const formStateHandler = (state) => {
    setIsFormOpen(state);
  }

  let formContent = (
    <div>
      <button onClick={() => formStateHandler(true)}>Add New Expense</button>
    </div>
  );

  if (isFormOpen) {
    formContent = <ExpenseForm onClose={formStateHandler} onSaveExpenseData={saveExpenseDataHandler} />;
  }

  return (
    <div className="new-expense">
      {formContent}
    </div>
  );
};

export default NewExpense;
