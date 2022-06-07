import react from 'react';
import {useState,useEffect} from "react";
import axios from "axios";
import{Link} from "react-router-dom"
import Blog from "./Blog"

const Blogs = ()=>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        getData();
    },[])
     const getData=()=>{
      axios.get("https://heroku-new-blog-app.herokuapp.com/api/allblog").then((res)=>{
          setData(res.data.blogs);
        //  console.log(res.data.blogs);
      })   
     }

    return (
        <div>
          {data && data.map((blog,index)=><Blog id={blog._id} title={blog.title} description={blog.description} image={blog.image} name={blog.user}/>)}
        </div>
    )
};


export default Blogs;