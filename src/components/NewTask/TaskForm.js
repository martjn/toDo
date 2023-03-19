import React, {useState} from 'react';
import './TaskForm.css';

const TaskForm = (props) => {
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
        console.log(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const taskData = {
            title: enteredTitle,
            priority: enteredPriority,
            date: new Date(enteredDate)
        }
        props.onAddTask(taskData)
        setEnteredTitle('')
        setEnteredPriority('low')
        setEnteredDate('')
        setEditForm(false)
    }

    return (
        <form className ="task-form" onSubmit={submitHandler}>
            <div className="new-task__controls">
                <div className="new-task__control">
                    <label>New Task</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-task__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
                <div className="new-task__control">
                    <label>Select Task Priority</label>
                    <select value={props.selected} onChange={priorityChangeHandler}>
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                    </select>
                </div>
            </div>

            <div className="new-task__actions">
                <button type="submit">Add Task</button>
            </div>
        </form>
    )
}

export default TaskForm