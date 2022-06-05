import * as React from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function TodoInput(props) {
    const SubmitButton = () => {
        return (
            <IconButton type="submit" color="primary" aria-label="add a todo" style={{height: "3rem", width: "3rem"}}
                        onClick={props.submit}>
                {
                    props.isEditing ? <EditIcon fontSize="20"  /> : <AddCircleIcon fontSize="20"/>
                }
            </IconButton>
        );
    }
    return (
        <Box component="form" onSubmit={props.submit} autoComplete="off" sx={{width: "100%",}}>
            <TextField
                id="TodoInput"
                label={props.label}
                color="primary"
                InputProps={{endAdornment: <SubmitButton/> }}
                style={{width: "100%", paddingRight: "0"}}
                className={"TodoInput"}
                focused
            />
        </Box>
    );
}