import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import Card from "../Components/Card";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function Feed() {

    //try and catch, error handaling, loading gif DONE
    //create a new component of feed using class component DONE

    // responsive design    
    const [posts, setPost] = useState([]);

    const [isError, setError] = useState(false)
    const [loading, setLoading] = useState(false);
    // const [myData, setMyData] = useState([])

    useEffect(async () => {
        await loadPost();

        async function loadPost() {
            // setLoading(true)
            // setError(false)
            try {
                setLoading(true)
                setError(false)
                const resource = await axios.get('https://reqres.in/api/users');
                console.log(resource)
                setLoading(false)
                setPost(resource.data.data)
                console.log(posts)
            }
            catch (error) {
                setError(true)
                setLoading(false)
                // console.log("there is some error in data")

            }

        }
    }, []);
    if (isError) {
        const Alert = React.forwardRef(function Alert(props, ref) {
            return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
        });
        // return <p>error</p>
        return (
            <div>
                <Stack spacing={2} sx={{ width: '100%', marginLeft: "200px", marginRight: "200px" }}>
                    <Alert severity="error">There is Some Network Issues or May be Your Data is not Available...</Alert>
                </Stack>
            </div>
        )

    }


    if (!isError) {

        return (
                    <div style={{display:"grid", gridTemplateRows:"auto auto auto", marginTop:"50px"}} >
                        {loading ? <img src="loader1.gif" style={{ width: 20, marginBlock: 100 }} /> : posts.map((item) => { return (<Card item={item} />) })}
                        {/* {Error ? <div>There is some error..</div> : posts.map((item)=>{ return (<Card item={item} />)})} */}
                    </div>
        )
    }

}
export default Feed;