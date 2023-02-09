import React from 'react';
import './NewTask.css';

import TaskForm from './TaskForm';
const NewTask = (props) => {
    const saveTaskDataHandler = (enteredTaskData) => {
        const taskData = {
            ...enteredTaskData,
            id: Math.random().toString()
        }
        props.onAddTask(taskData)
    }
    return (
        <div className="new-task">
            <TaskForm onAddTask={saveTaskDataHandler}></TaskForm>
        </div>
    )
}

export default NewTask