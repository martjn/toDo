import React, {useState} from 'react';
import TaskItem from "./TaskItem";
import './Tasks.css'
import Card from '../UI/Card';
import TaskFilter from './TaskFilter.js';
import TaskList from './TaskList';

const Tasks = (props) => {
    const [currentSelectedPriority, setCurrentSelectedPriority] = useState('all')
    const selectedPriorityChangeHandler = (selectedPriority) => {
        setCurrentSelectedPriority(selectedPriority);
        console.log(`Year data in Tasks.js ${currentSelectedPriority}` )
    }

    const filteredTasks = props.taskData.filter(task => task.priority === (currentSelectedPriority))
    const unFilteredTasks = props.taskData

    return (
        <Card className="tasks">
            <TaskFilter onChangeSelectedPriority={selectedPriorityChangeHandler}></TaskFilter>
            <TaskList filteredTasks={filteredTasks} unFilteredTasks={unFilteredTasks} selectedPriority={currentSelectedPriority}></TaskList>
        </Card>
    )
}

export default Tasks