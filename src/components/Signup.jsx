import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    const[inputs,setInputs]=useState({});
    const inputHandler=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs)
    }
    const submitHandler=()=>{
        console.log("btn clicked",inputs)
        axios.post("http://localhost:3008/api/post",inputs)
        .then((res)=>{
            console.log(res)
            alert(res.data.message);
        })
    }
  return (
    <div style={{margin:'10%'}}>
    <Typography variant='h4' style={{color:"purple"}}>
        Signup form
        </Typography>
        <br></br>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                variant='outlined'
                label="name"
                fullWidth
                name='name'
                onChange={inputHandler}
                />
       
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
                <TextField
                variant='outlined'
                label="Email"
                fullWidth
                name='email'
                onChange={inputHandler}
                />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
                <TextField
                variant='outlined'
                label="address"
                fullWidth
                multiline
                row={5}
                name='address'
                onChange={inputHandler}
                />
                </Grid>
               
                <Grid item xs={12} sm={6} md={6}>
                <TextField
                variant='outlined'
                label="username"
                fullWidth
                name='username'
                onChange={inputHandler}
                
                />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <TextField
                variant='outlined'
                label="password"
                fullWidth
                name='password'
                onChange={inputHandler}
            
                />
                </Grid>
                <Grid item sx={12} sm={12} md={12}>
                    <Button variant='contained' color='secondary' onClick={submitHandler}>submit</Button>
                </Grid>
                <Grid item sx={12} sm={12} md={12}>
                    <Link to={'/'}>back to login</Link>
                </Grid>
                </Grid>
            

    </div>
  )
}

export default Signup
