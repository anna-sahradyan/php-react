import React from 'react';
import { ToastContainer } from 'react-toastify';
import {Route, Routes} from "react-router";
import Home from "./components/home";
import List from "./components/List";
import Form from "./components/Form";
const App = () => {
    return (
        <>
           <ToastContainer/>

           <Routes>
               <Route path={"/"} element={<Home/>}/>
               <Route path={"/list"} element={<List/>}/>
               <Route path={"/signup"} element={<Form/>}/>
           </Routes>
        </>
    );
};

export default App;