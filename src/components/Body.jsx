import React, { useState } from 'react';
import Input from "./Input";

export default function Body({ onSubmit }) {
    const [tasks, setTasks] = useState([]);

    const handleNewTask = (taskData) => {
        setTasks((prevTasks) => [...prevTasks, taskData]); // Add new task to the state
        console.log('New Task Submitted:', taskData); // Log or handle the data
    };

    return (
        <div id='bodyComponent'>
            <div className='bodySection'>
                <h2 className='inputTitle'>Create Task:</h2>
                <Input onSubmit={handleNewTask} />
            </div>
            <div className='bodySection'>
                <h2>Submitted Tasks:</h2>
            </div>
        </div>
    );
}