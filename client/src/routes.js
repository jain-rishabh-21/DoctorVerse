import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import React, { lazy } from "react"

const Home=lazy(()=>import("./pages/Home"))
const AboutUs=lazy(()=>import("./pages/AboutUs"))
const Contact=lazy(()=>import("./pages/Contact"))

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
},
{
        path:"/Login",
        element:Login
},
{
        path:"/register",
        element:SignUp
}


];