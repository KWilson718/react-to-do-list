import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input() {
    return (
        <div id='inputComponent'>
            <Box
                component='form'
                sx={{
                    width: 1/2,
                    height: 100,
                    border: 1,
                    padding: 2,
                }}
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                />
            </Box>
        </div>
    );
}