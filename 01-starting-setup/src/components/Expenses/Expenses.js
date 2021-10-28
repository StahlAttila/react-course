import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear() === Number.parseInt(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={onFilterChangeHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
