import React, { useState, useEffect } from 'react';
import Input from "./Input";
import TaskSection from './TaskSection';

// Core component of the program, handles the list of tasks
export default function Body({ onSubmit }) {
    // Stores the list of tasks
    const [tasks, setTasks] = useState(() => {
        // Retrieve tasks from localStorage on initial render
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Adds a new task to the list
    const handleNewTask = (taskData) => {
        setTasks((prevTasks) => [...prevTasks, taskData]);
    };

    // Removes a task from the list
    const handleDeleteTask = (indexToDelete) => {
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div id='bodyComponent'>
            {/* Input Section */}
            <div className='bodySection'>
                <h2 className='sectionTitle'>Create Task:</h2>
                <Input onSubmit={handleNewTask} />
            </div>

            {/* Output Section */}
            <div className='bodySection'>
                <h2 className='sectionTitle'>Submitted Tasks:</h2>
                <TaskSection taskList={tasks} onDeleteTask={handleDeleteTask} />
            </div>
        </div>
    );
}