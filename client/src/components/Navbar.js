import React from 'react'
import '../styles/Navbarstyle.css'
const Navbar = () => {
  return (
<div class="m-4">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">DoctorVerse</a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    <a href="#" class="nav-item nav-link">Home</a>
                    <a href="#" class="nav-item nav-link">Services</a>
                    <a href="#" class="nav-item nav-link">About Us</a>
                    <a href="#" class="nav-item nav-link">Contact Us</a>
                    <a href="#" class="nav-item nav-link">Our Doctors</a>
                </div>
                <div class="navbar-nav ms-auto">
                    <a href="#" class="nav-item nav-link">Login/Register</a>
                </div>
            </div>
        </div>
    </nav>
</div>
  )
}

export default Navbar