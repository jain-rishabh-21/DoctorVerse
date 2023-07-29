import React from 'react'
import '../styles/Homesectionstyle.css'
const HomeSection = () => {
  return (
    <>
      <div class="container">
      <div class="row">
    <div class="col-lg-6">
    <div class="text1">
    <p>Let's find your doctor</p>
    </div>
    <div class="text2">
    <p>Find the best doctors and hospitals
    in your area or even have a consultation with your doctor online.</p>
    </div>
    <div class="book">
    <div class="book_content">
    Book Appointment
    </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div class="flexbox_2">
      <img src='/assets/images/doctor.png' id="doctor" alt="doctor"/>
     <img src='/assets/images/available.png' id="available_doctors" alt="available doctors"/>
      <img src='/assets/images/stars.png' id="rating" alt="rating"/>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default HomeSection