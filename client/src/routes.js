import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"


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