import React, {useState} from 'react';
import './App.css';

import Tasks from './components/Tasks/Tasks.js';
import NewTask from './components/NewTask/NewTask';

const DUMMY_TASKS = [
    {
        id: 'e1',
        date : new Date(2024, 0, 10),
        title : 'Study React',
        priority: 'high'
    },
    {
        id: 'e2',
        date : new Date(2024, 0, 10),
        title : 'Study JS',
        priority: 'high'
    },
    {
        id: 'e3',
        date : new Date(2023, 0, 10),
        title : 'Study HTML',
        priority: 'low'
    }

]
const App = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS)
  const addTaskHandler = (task) => {
      console.log('In App.js')
      setTasks((previousTask) => {
          return [task, ...previousTask]
      })
  }

  return (
    <div className="App">
        <NewTask onAddTask={addTaskHandler}></NewTask>
        <Tasks taskData={tasks}></Tasks>
    </div>
  );
}

export default App;
