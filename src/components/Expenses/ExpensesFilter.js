import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('all')
    const [buttonState, setButtonState] = useState('all')

    const yearChangeHandler = (event) => {
        event.preventDefault()
        console.log('filter change handled by ExpensesFilter.js')
        setSelectedYear(event.target.value)
        props.onChangeSelectedYear(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by priority</label>
                <select value={props.selected} onChange={yearChangeHandler}>
                    <option value='all'>all</option>
                    <option value='low'>low</option>
                    <option value='medium'>medium</option>
                    <option value='high'>high</option>
                </select>
            </div>
        </div>
    );
};
export default ExpensesFilter;