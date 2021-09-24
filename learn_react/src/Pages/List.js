import { useState } from 'react';
import "../Components/todoList.css";
import clsx from 'clsx';
import Item from "../Components/Item";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import UndoIcon from '@material-ui/icons/Undo';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';



const List = () => {

    // logic and functions here
    const [task, setTask] = useState('');
    const [taskGroup, setTaskGroup] = useState([]);
    const [undodetails, setUndoDetails] = useState([]);


    const handleInput = (e) => {
        setTask(e.target.value);
    }


    const handleClick = (e) => {
        if (task.length != 0) {
            const tempArr = [...taskGroup]
            const tempObj = {
                id: Math.random(),
                text: task,
            }

            tempArr.push(tempObj)
            setTaskGroup(tempArr)
            console.log(tempArr)
            setTask("")
        } else {
            alert("Please enter Task...")
        }

    }


    const handleDelete = (index, id, text, e) => {

        e.preventDefault()
        console.log(id)
        setUndoDetails([...undodetails, { id: id, text: text, indexOfItem: index }])
        console.log(undodetails)

        const updatedList = taskGroup.filter((item) => item.id !== id);
        setTaskGroup(updatedList)
        console.log(updatedList)

        //     const deletedItemArr = taskGroup.filter((item) => item.id === id);
        //     const deletedItemObj = deletedItemArr[0]
        //     //    const undoArr1 = [...deletedItemArr]
        //    //    const undoObj = 
        //    //    undoArr1.push(undoObj)
        //    setUndoDetails({indexOfItem : index, itemToReplace : deletedItemObj})
        // //    setundodetails1.push(undodetails)
        //    setUndoDetails1(undodetails)
        //    console.log(undodetails1)
        //    console.log(deletedItemObj)
        //    console.log('array', deletedItemArr)
        //    console.log("undo",undodetails)
        // console.log(undodetails)
    }

    const undoItem = (e) => {
        if (undodetails.length !== 0) {
            e.preventDefault()
            let newList = [...taskGroup]
            let newUndoDetails = [...undodetails].reverse()
            const elementToAddInList = undodetails[newUndoDetails.length - 1]
            newList.splice(elementToAddInList.indexOfItem, 0, elementToAddInList)

            // const undoArr = [...taskGroup]
            // undoArr.splice(undoArr.indexOfItem, 0, undoArr.itemToReplace)
            // console.log("undoArr", undoArr)
            // setTaskGroup(undoArr)
            let newUndoDetails1 = [...undodetails]
            newUndoDetails1.pop()
            setUndoDetails(newUndoDetails1)
            setTaskGroup(newList)
        } else {
            alert("Please Delete Some item...")
        }
    }


    // home
    // 1. update css to match design
    // 2. strcuture into child components and use props

    // tasgourp = ['s','b'].map(item=>'s'.id)
    // taksgournp =[
    //     {id:0, text:'a'}
    //     {jid:1, text:'b'}
    // ]
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <div style={{position: "absolute", top: 50, bottom: 0, left: 0, right: 0}}>
                    <Box color="text.primary" clone>
                        <Paper elevation={3} style={{ display: 'inline-block', justifyContent: 'center', alignItems: 'self-start', backgroundColor: "#cce6ff" }}>
                            {/* setting image */}
                            <img src="today_logo.png" className="logo" style={{ height: 60, width: 70 }} />
                            {/* add title */}
                            <div className="title"><h1>ToDo List</h1></div>
                            {/* add input field */}
                            <TextField id="filled-basic" value={task} onChange={handleInput} label="Task" variant="filled" style={{ display: 'center', flexWrap: 'nowrap', width: 500 }} />
                            <br />
                            {/* adding button */}
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<SendIcon />}
                                onClick={handleClick}
                                style={{ width: 500, display: 'inline-block', justifyContent: 'center', alignItems: 'self-start' }}>
                                Add
                            </Button>
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<UndoIcon />}
                                onClick={undoItem}
                                style={{ width: 500, flexWrap: 'nowrap', alignItems: 'center', backgroundColor: "slateblue" }}>
                                Undo
                            </Button>
                            <br />
                            <br />

                            {taskGroup.map((item, index) => {
                                return (
                                    <Item item={item} handleDelete={handleDelete} index={index} />
                                )
                            }
                            )}
                        </Paper>
                    </Box>
                </div>
            </Grid>
        </Box>
    )
}
export default List;