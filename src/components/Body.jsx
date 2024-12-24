import React, { useState } from 'react';
import Input from "./Input";

export default function Body({ onSubmit }) {
    const [tasks, setTasks] = useState([]);

    const handleNewTask = (taskData) => {
        setTasks((prevTasks) => [...prevTasks, taskData]);
    };

    return (
        <div id='bodyComponent'>
            <div className='bodySection'>
                <h2 className='inputTitle'>Create Task:</h2>
                <Input onSubmit={handleNewTask} />
            </div>
            <div className='bodySection'>
                <h2>Submitted Tasks:</h2>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task.task} - {task.timeFrame || 'No Time Frame'}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}