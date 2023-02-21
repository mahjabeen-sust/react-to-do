
import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './styles/TodoForm.css';

function TodoForm(props) {
    const [title, setTitle] = useState("")
    const [deadline, setDeadline] = useState("")
    const [stats, setStats] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        props.setTodo(prev => prev.concat({ title, deadline, stats, id: Date.now() }))
        props.setForm(0)

    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className='form-container'>
                <p>Add New ToDo</p>
                <TextField className='input-color' fullWidth value={title} label="Title" variant="outlined" size="small" onChange={e => setTitle(e.target.value)} /><br /><br />
                <TextField className='input-color' fullWidth value={deadline} label="Deadline" variant="outlined" size="small" onChange={e => setDeadline(e.target.value)} /><br /><br />
                <FormControl fullWidth variant="outlined" >
                    <InputLabel>Status</InputLabel>
                    <Select className='input-color' value={stats} label="Status" onChange={e => setStats(e.target.value)}>
                        <MenuItem value="in_progress">In Progress</MenuItem>
                        <MenuItem value="not_started">Not Started</MenuItem>
                        <MenuItem value="done">Done</MenuItem>
                    </Select>
                </FormControl>
                <br /><br />
                <div className='btn-container'>
                    <Button className="Button" variant="contained" size="small" onClick={() => props.setForm(0)} >
                        Cancel
                    </Button>
                    <Button variant="contained" size="small" type="submit">
                        Add
                    </Button>
                </div>

            </fieldset>

        </form >
    )

}


export default TodoForm;