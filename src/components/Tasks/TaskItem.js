import React, {useState} from 'react';
import './TaskItem.css'

import TaskDate from './TaskDate.js';
import Card from '../UI/Card.js';

const TaskItem = (props) => {

    return (
        <li>
            <Card className="task-item">
                <TaskDate date={props.date}></TaskDate>
                <div className="task-item__description">
                    <h2>{props.title}</h2>
                    <div className="task-item__price">{props.priority}</div>
                </div>
            </Card>
        </li>
    )
}

export default TaskItem