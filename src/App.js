import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        date : new Date(2024, 0, 10),
        title : 'Study React',
        priority: 'high'
    },
    {
        id: 'e2',
        date : new Date(2024, 0, 10),
        title : 'Study JS',
        priority: 'high'
    },
    {
        id: 'e3',
        date : new Date(2023, 0, 10),
        title : 'Study HTML',
        priority: 'low'
    }

]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
      console.log('In App.js')
      setExpenses((previousExpenses) => {
          return [expense, ...previousExpenses]
      })
  }

  console.log(expenses)

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses expenseData={expenses}></Expenses>
    </div>
  );
}

export default App;
