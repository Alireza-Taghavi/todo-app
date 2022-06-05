import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {IconButton, Tooltip} from "@mui/material";

export default function TodoList({todos, completeTodo, removeTodo, setEdit}) {
    const iconStyle = {
        cursor: "pointer",
        border: "3px solid white",
        borderRadius: "50%",
        padding: 0.5,
        fontSize: {xs: 15, sm: 20},
    }
    return (
        <Box sx={{display: "flex", width: "100%", flexDirection: "column", gap: "0.5rem", paddingBottom: "2rem"}}>
            {(todos.map((todo, index) => (
                <Box
                    key={index}
                    sx={{
                        color: "white",
                        background: `linear-gradient(80deg,${todo.bg[0]} 0%,${todo.bg[1]} 100%)`,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1rem",
                        borderRadius: 1,
                        opacity: todo.isComplete ? 0.5 : 1,
                    }}

                >
                    <Typography key={todo.id}
                                onClick={() => completeTodo(todo.id)}
                                sx={{
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    textDecoration: todo.isComplete ? "line-through" : "none"
                                }}
                    >
                        {todo.task}
                    </Typography>
                    <Box sx={{display: "flex", gap: "0.4rem",}} fontSize="small">

                        <Tooltip title="Edit" placement="top">
                            <IconButton onClick={() => setEdit({id: todo.id, value: todo.task})} sx={{padding:"4px"}}>
                                <EditIcon
                                    sx={iconStyle}
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete" placement="top">
                            <IconButton onClick={() => removeTodo(todo.id)} sx={{padding:"4px"}}>
                                <DeleteIcon
                                    sx={iconStyle}
                                />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>

            )))}
        </Box>
    );
}