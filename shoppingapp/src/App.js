import './App.css';

function App() {
  const expense = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: Date(2020, 7, 14) },
    { id: 'e2', title: 'New TV', amount: 799.49, date: Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: Date(2021, 2, 28) },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: Date(2021, 5, 12) },
  ]

  return (
    <div className="App">
      {expense.map((el, index) => (
        <div key={index}>
          <h2>{el.title}</h2>
          <div>{el.amount}</div>
          <div>{el.date}</div>
        </div>
      ))}
    </div>
  );
}


export default App;
