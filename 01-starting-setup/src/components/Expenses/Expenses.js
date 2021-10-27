import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {

  return (
    <Card className="expenses">
      {props.data.map(expense => <ExpenseItem expense={expense}/>)}
    </Card>
  )
}

export default Expenses
