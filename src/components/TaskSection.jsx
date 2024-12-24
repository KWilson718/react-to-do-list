import React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskSection({ taskList }) {
    if (!taskList || taskList.length === 0) {
        return (
            <div id="taskSection">
                <Box
                    component="section"
                    sx={{
                        width: 3 / 4,
                        border: 1,
                        padding: 2,
                    }}
                >
                    <h3>No Tasks To Complete At This Time</h3>
                </Box>
            </div>
        );
    }
    
    return (
        <div id="taskSection">
            <Box
                component="section"
                sx={{
                    width: 3 / 4,
                    border: 1,
                    padding: 2,
                }}
            >
                <List>
                    <ListItem>
                        <ListItemText primary='Task Name' />
                        <ListItemText primary='Task TimeFrame' />
                        <ListItemText primary='Delete Task' />
                    </ListItem>
                    {taskList.map((task, index) => (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={task.task} />
                            {task.timeFrame && (
                                <ListItemText secondary={task.timeFrame} />
                            )}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    );
}



// <ul>
// {tasks.map((task, index) => (
//     <li key={index}>
//         {task.task} - {task.timeFrame || 'No Time Frame'}
//     </li>
// ))}
// </ul>