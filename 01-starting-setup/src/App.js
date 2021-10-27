import Expenses from "./components/Expenses/Expenses";

function App() {

  const expenses = [
    {title: 'Car insurance', amount : 253.12, date: new Date(1998, 5, 11)},
    {title: 'Breakfast', amount : 10.12, date: new Date(2021, 10, 5)},
    {title: 'Bills', amount : 100.45, date: new Date(2021, 5, 11)},
    {title: 'Udemy Course', amount : 11.50, date: new Date(2021, 4, 3)},
  ];

  return (
    <div>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
