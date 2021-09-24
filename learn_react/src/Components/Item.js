import { useState } from 'react';
import clsx from 'clsx';  
import "./todoList.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

function Task({item, handleDelete, index}) 
    {
    const [isCompleted, setIsCompleted] = useState(false);
        return(
            <div key={item.id} className="items"> 
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemText primary={item.text} className={clsx({isLiOpen:isCompleted})} onClick={() => setIsCompleted(!isCompleted)}/>
                        <ListItemIcon>
                                <DeleteIcon className="delIcon" onClick={(e) => handleDelete(index, item.id,item.text,e)}/>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </div>   
                   
            )
    } 
        // 1 move component to subcomponents
        // try to use props to pass this into coment
        // item
        // handledelet function
        // handleComplete function 
            
            
            // fpr ccs you have to use clsx library
            // inside subcomponent - listitem -> use clsx to toggle the css property when onClick
            
       
export default Task;