import React from 'react';
import { Button } from '@mui/material';
import './styles/TodoList.css';


function AddTodoButton(props) {
    return (
        <div className='btn-container-add-todo'>
            <Button variant="contained" onClick={() => props.setForm(1)}>Add New ToDo</Button>
        </div>
    )
}


export default AddTodoButton;