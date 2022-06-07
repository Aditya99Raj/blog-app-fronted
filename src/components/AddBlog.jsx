import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import react from 'react';
import {useState,useEffect} from "react"
const AddBlog=()=>{
    const[inputs,setInputs] = useState({
        title:"",
        description:"",
        image:"",
    });
    // useEffect(()=>{
    //     pos
    // })

    const postData=()=>{
        axios.post("https://heroku-new-blog-app.herokuapp.com/api/addblog",{
            title:inputs.title,
            description:inputs.description,
            image:inputs.image
           
        }).then((response)=>{
            console.log(response.data)
            return response.data
        })
    }

    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        postData()
        console.log(inputs)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box border={3} borderRadius={5} padding={5} width={"80%"}>
                    <Typography>Post blog</Typography>
                    <InputLabel>Title</InputLabel>
                    <TextField name="title" value={inputs.title} onChange={handleChange}></TextField>
                    <InputLabel>image</InputLabel>
                    <TextField name="image" value={inputs.image} onChange={handleChange}></TextField>
                    <InputLabel>Description</InputLabel>
                    <TextField name="description" value={inputs.description} onChange={handleChange}></TextField>
                    <br></br>
                    <Button type="submit">Submit</Button>
                </Box>
            </form>
        </div>
    )
};

export default AddBlog;