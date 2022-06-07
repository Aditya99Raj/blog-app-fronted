import react from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Blog from "./Blog";

const BlogDetail=()=>{
    const [blogdetail,setBlogdetail] = useState({});
    const {id} = useParams();
     
    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        axios.get(`https://heroku-new-blog-app.herokuapp.com/api/${id}`).then((res)=>{
            setBlogdetail(res.data.blog);
            console.log(res.data.blog)
        })
    }
    return (
        <div style={{marginLeft:"450px"}}>
          <img src={blogdetail.image}/> 
          <p>{blogdetail.title}</p>
          <p>{blogdetail.description}</p>   

        </div>
    )
};

export default BlogDetail;