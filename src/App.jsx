import Header from "./components/Header"
//import './App.css';
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlog from "./components/UserBlog";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/BlogDetail";
import React from "react";
import { Routes,Route } from "react-router-dom";
import { useSelector } from "react-redux";



function App() {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
      <Header/>

      </header>
      <main>
        <Routes>
          <Route path="auth" element={<Auth/>} />
          <Route path="/" element={<Blogs/>} />
          <Route path="myBlogs" element={<UserBlog/>} />
          <Route path="/blogdetails/:id" element={<BlogDetail/>} />;
          <Route path="blogs/add" element={<AddBlog/>} />
        </Routes>
      </main>
    </React.Fragment>

  
  );
}

export default App;
