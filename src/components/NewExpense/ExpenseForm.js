import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPriority, setEnteredPriority] = useState('low')
    const [enteredDate, setEnteredDate] = useState('')
    const [editForm, setEditForm] = useState(false)
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const priorityChangeHandler = (event) => {
        setEnteredPriority(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            priority: enteredPriority,
            date: new Date(enteredDate)
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredPriority('low')
        setEnteredDate('')
        setEditForm(false)
    }

    return (
        <form className ="expense-form" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>New Task</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Select Task Priority</label>
                    <select>
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                    </select>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Task</button>
            </div>
        </form>
    )
}

export default ExpenseForm