import React, { useState } from 'react';
import Input from "./Input";
import TaskSection from './TaskSection';

export default function Body({ onSubmit }) {
    const [tasks, setTasks] = useState([]);

    const handleNewTask = (taskData) => {
        setTasks((prevTasks) => [...prevTasks, taskData]);
    };

    const handleDeleteTask = (indexToDelete) => {
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div id='bodyComponent'>
            <div className='bodySection'>
                <h2 className='sectionTitle'>Create Task:</h2>
                <Input onSubmit={handleNewTask} />
            </div>
            <div className='bodySection'>
                <h2 className='sectionTitle'>Submitted Tasks:</h2>
                <TaskSection taskList={tasks} onDeleteTask={handleDeleteTask} />
            </div>
        </div>
    );
}