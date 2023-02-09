import React, {useState} from 'react';
import TaskItem from './TaskItem';
import './TaskList.css'

const TaskList = (props) => {
    if(props.filteredTasks.length === 0 && props.selectedPriority !== "all") {
        console.log(props.selectedPriority)
        return <p className="tasks-list__fallback">No tasks found.</p>
    }
    return (
        <ul className="tasks-list">
            { props.selectedPriority !== 'all' ?
                props.filteredTasks.map((task) => {
                    return <TaskItem
                        id={task.id}
                        title={task.title}
                        priority={task.priority}
                        date={task.date}
                        ></TaskItem>
                }) :
                props.unFilteredTasks.map((task) => {
                    return <TaskItem
                        id={task.id}
                        title={task.title}
                        priority={task.priority}
                        date={task.date}
                    ></TaskItem>
                })
            }

        </ul>
    )
}
export default TaskList
