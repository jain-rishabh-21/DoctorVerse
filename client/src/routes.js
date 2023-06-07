import React from "react"
import {  Route,  ReactLocation } from "react-location";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

export const routes: Route[] = [

{
        path:"/",
        element:<Login/>
},
{
        path:"/home",
        element:<Home/>

},
{
        path:"/contact",
        element:<Contact/>
},
{
        path:"/about",
        element:<AboutUs/>
},



];

export const location = new ReactLocation();