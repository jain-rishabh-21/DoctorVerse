import React from "react"
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


export const routes = [

{
        path:"/",
        element:Home

},
{
        path:"/contact",
        element:Contact
},
{
        path:"/about",
        element:AboutUs
}



];
