import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Input() {
    return (
        <div id='inputComponent'>
            <Box
                component="form"
                sx={{
                    width: 3/4,
                    height: 100,
                    border: 1,
                    padding: 2,
                }}
                noValidate
                autoComplete="off"
            >
                <h3 className='inputTitle'>Create Task</h3>
                <div className='inputRow'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Task"
                    />

                    <TextField 
                        id="outlined"
                        label="Time Frame"
                    />

                    <Button variant="contained">Submit Task</Button>
                </div>
            </Box>
        </div>
    );
}