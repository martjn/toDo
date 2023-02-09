import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [currentSelectedYear, setCurrentSelectedYear] = useState('2023')
    const selectedYearChangeHandler = (selectedYear) => {
        setCurrentSelectedYear(selectedYear);
        console.log(`Year data in Expenses.js ${currentSelectedYear}` )
    }

    const filteredExpenses = props.expenseData.filter(expense => expense.priority === (currentSelectedYear))
    const unFilteredExpenses = props.expenseData

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeSelectedYear={selectedYearChangeHandler}></ExpensesFilter>
            <ExpensesList filteredExpenses={filteredExpenses} unFilteredExpenses={unFilteredExpenses} selectedYear={currentSelectedYear}></ExpensesList>
        </Card>
    )
}

export default Expenses