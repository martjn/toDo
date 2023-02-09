import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
    if(props.filteredExpenses.length === 0 && props.selectedYear !== "all") {
        console.log(props.selectedYear)
        return <p className="expenses-list__fallback">No expenses found.</p>
    }
    return (
        <ul className="expenses-list">
            { props.selectedYear !== 'all' ?
                props.filteredExpenses.map((expense) => {
                    return <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        priority={expense.priority}
                        date={expense.date}
                        ></ExpenseItem>
                }) :
                props.unFilteredExpenses.map((expense) => {
                    return <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        priority={expense.priority}
                        date={expense.date}
                    ></ExpenseItem>
                })
            }

        </ul>
    )
}
export default ExpensesList
