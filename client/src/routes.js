import React from "react"
import {  Route,  ReactLocation } from "react-location";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


export const routes: Route[] = [

{
        path:"/",
        element:<Home/>

},
{
        path:"/contact",
        element:<Contact/>
},
{
        path:"/about",
        element:<AboutUs/>
}



];

export const location = new ReactLocation();