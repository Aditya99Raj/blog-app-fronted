import react from 'react';
import {AppBar,Box,Button,Tabs,Toolbar,Typography,Tab} from '@mui/material'
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux"
const Header = ()=>{
    const [value,setValue]=useState("");
    const isLoggedIn = useSelector((state)=> state.isLoggedIn);
    return (
       <AppBar sx={{background:"#ff6a00"}} position="sticky" >
          <Toolbar>
             <Typography variant="h4" >BLOGS</Typography> 
            {!isLoggedIn && <Box display="flex">
                 <Tabs value={value} onChange={(e,val)=>setValue(val)}>
                     <Tab LinkComponent={Link} to="/" label="Allblogs"/>
                     <Tab LinkComponent={Link} to="/blogs/add" label="AddBlog"/>
                 </Tabs>
             </Box>}
            <Box display="flex" marginLeft="auto">
              { !isLoggedIn && <Button LinkComponent={Link} to="/auth" variant="contained" color="success" >Login</Button>}
              { !isLoggedIn && <Button LinkComponent={Link} to="/auth" variant="contained" color="primary" >SignuP</Button>}
               {isLoggedIn && <Button LinkComponent={Link} to="/auth" variant="contained" color="warning" >Logut</Button> }
            </Box>
          </Toolbar> 
       </AppBar>
    )
};


export default Header;