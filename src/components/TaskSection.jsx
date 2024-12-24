import React from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskSection({ taskList, onDeleteTask }) {
    // Default case if there are no tasks in the list
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
                {/* Outputs a table with each task's information, filling in "No Time Frame" if there isn't a timeframe with the associated task. The table also includes a delete button using a MUI Icon */}
                <TableContainer>
                    <Table>
                        {/* Table Header */}
                        <TableHead>
                            <TableRow>
                                <TableCell>Task Name</TableCell>
                                <TableCell>Task TimeFrame</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Table Body */}
                        <TableBody>
                            {taskList.map((task, index) => (
                                <TableRow key={index}>
                                    <TableCell>{task.task}</TableCell>
                                    <TableCell>
                                        {task.timeFrame || "No Time Frame"}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton 
                                            edge="end" 
                                            aria-label="delete"
                                            onClick={() => onDeleteTask(index)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
}
