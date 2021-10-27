import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {id: 'e1', title: 'Car insurance', amount : 253.12, date: new Date(1998, 5, 11)},
    {id: 'e2', title: 'Breakfast', amount : 10.12, date: new Date(2021, 10, 5)},
    {id: 'e3', title: 'Bills', amount : 100.45, date: new Date(2021, 5, 11)},
    {id: 'e4', title: 'Udemy Course', amount : 11.50, date: new Date(2021, 4, 3)},
  ];

  return (
    <div>
      <NewExpense />
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
