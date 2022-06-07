import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";




const Blog = ({id, title, description, image, user }) => {

  const navigate = useNavigate();

  const blogDetail=()=>{
    navigate(`/blogdetails/${id}`)
  }

  return (
    <div onClick={blogDetail}>

      <Card sx={{ width: "40%", margin: "auto", mt: 2, pd: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {user}
            </Avatar>
          }

          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="294"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
};


export default Blog;