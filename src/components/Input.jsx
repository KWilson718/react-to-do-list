import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Input({ onSubmit}) {
    // State to manage input values
    const [task, setTask] = useState('');
    const [timeFrame, setTimeFrame] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on form submission
        if (task.trim()) {
            // Pass data to parent component or store it
            onSubmit({ task, timeFrame });

            // Clear input fields after submission
            setTask('');
            setTimeFrame('');
        } else {
            alert('Task is required!');
        }
    };

    return (
        <div id='inputComponent'>
            <Box
                component="form"
                sx={{
                    width: 3/4,
                    border: 1,
                    padding: 2,
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div className='inputRow'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)} // Update state on input
                    />

                    <TextField
                        id="outlined"
                        label="Time Frame"
                        value={timeFrame}
                        onChange={(e) => setTimeFrame(e.target.value)} // Update state on input
                    />

                    <Button type="submit" variant="contained">
                        Submit Task
                    </Button>
                </div>
            </Box>
        </div>
    );
}