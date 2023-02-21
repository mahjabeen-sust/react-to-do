import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import React, { useState } from 'react';

function TodoList(props) {

    const [delAction, setDelAction] = useState(0);
    // console.log(props)
    function handleDelete() {
        // we want to remove an item from the array of ToDo, 
        //so we give it a new array with all the to-dos,
        //except with the one that we want to get rid of
        //filter is not a part of React, its just JavaScript
        //in the filter function, if you give a value of True, it will include the id of the todo in the new array
        //if you give a False value, the id of that todo will be skipped
        props.setTodo(prev => prev.filter(todo => todo.id != props.id))
    }

    function DelButton() {
        return (

            <>
                <Button className='btn-delete' variant="contained" onClick={handleDelete}>Delete</Button>
            </>

        )
    }
    // return (
    //     <div className='todolist-item'>
    //         {/* <p> */}
    //         <span className='primary-bar'></span>
    //         <div className='content'>
    //             <h2>{props.title}</h2>
    //             <>Deadline: {props.deadline}</p>
    //         </div>
    //         {/* <li>Status: {props.stats}</li><button onClick={handleDelete}>Delete</button> */}
    //         {/* </p> */}
    //     </div>
    // )

    return (
        // <List sx={{ width: '100%', bgcolor: 'background.paper', border: 1, m: 2, mx: 'auto' }}>

        <ListItem alignItems="flex-start" className={`bar--${props.stats}`} onClick={() => setDelAction(1)}>
            <ListItemText
                primary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                            fontStyle="bold"
                        >
                            {props.title}
                        </Typography>

                    </React.Fragment>
                }

                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            fontStyle="italic"
                        >
                            {props.deadline ? `Deadline: ${props.deadline}` : ''}
                            {delAction ? <DelButton /> : ''}
                        </Typography>

                    </React.Fragment>
                }




            />
        </ListItem>


        // </List>

    )

}

export default TodoList;