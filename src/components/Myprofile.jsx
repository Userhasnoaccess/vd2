import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const Myprofile = () => {

    
        const [userId,setUserId]= useState(sessionStorage.getItem("id"))
        const[myData,setMyData] =useState([]);

        useEffect(()=>{
            axios.get("http://localhost:3008/api/viewmypro/"+userId)
            .then((res)=>{
                console.log(res.data)
                setMyData(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })

        })
        return (
        <div style={{margin:"8%"}}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}> </Grid>
                {myData.map((val,i)=>{
                    return(
                        <Grid item xs={12} sm={4} md={4}> 
                        <Card sx={{ maxWidth: 345 }}>
  
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          Name:{val.name}
        </Typography>
        <Typography x ={{fontSze:14}}>
       Email:{val.email}
       </Typography>


       
        <Typography x ={{fontSze:14}}>
       username:{val.username}
       </Typography>
    
    
       
      


   
        <Typography x ={{fontSze:14}}>
       address:{val.address}
       </Typography>
      
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Update</Button>
      </CardActions>
    </Card>
                        </Grid>
                    )
                })}
           
           <Grid item xs={12} sm={4} md={4}> </Grid>   
    </Grid>
    </div>
  )
}

export default Myprofile
