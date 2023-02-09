import React, {useState} from 'react';

import './TaskFilter.css';

const TaskFilter = (props) => {
    const [selectedPriority, setSelectedPriority] = useState('all')

    const priorityChangeHandler = (event) => {
        const nextSelectedPriority =
            selectedPriority === "all" ? "high"
                : selectedPriority === "high"
                ? "medium"
                : selectedPriority === "medium"
                ? "low"
                : "all";

        props.onChangeSelectedPriority(nextSelectedPriority);
        setSelectedPriority(nextSelectedPriority);
        console.log(selectedPriority);
        console.log("event target value " + event.target.value);
    }

    console.log(selectedPriority + ' outside')
    return (
        <div className='tasks-filter'>
            <label>Filter by priority</label>
            <div className='tasks-filter__control'>
                <button type="button" value={selectedPriority} onClick={priorityChangeHandler}>{selectedPriority}</button>
            </div>
        </div>
    );
};
export default TaskFilter;