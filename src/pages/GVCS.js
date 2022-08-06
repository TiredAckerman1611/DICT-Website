import React from 'react'
import {Link} from 'react-router-dom'


export default function Mandate() {
  return (
    <React.Fragment>
  <div class="wrapper">
    <nav>
      <input type="checkbox" id="show-search"/>
      <input type="checkbox" id="show-menu"/>
      <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
      <div class="content">
      <div class="logo"><a href="#">GOV.PH</a></div>
        <ul class="links">
          <li><a href="#">Home</a></li>
          
          <li>
            <a href="#" class="desktop-link">About Us</a>
            <input type="checkbox" id="show-features"/>
            <label for="show-features">About Us</label>
            <ul>
              <li><a href="mandate.html">Mandate, Powers and Function</a></li>
              <li><a href="MissionandVision.html">Mission and Vision</a></li>
              <li><a href="DICT-Citizen_s-Charter.pdf">Citizen's Charter</a></li>
              <li><a href="RA10844.html">Republic Act. No. 10844</a></li>
              <li><a href="#">Attached Agencies</a></li>
              <li><a href="#">Officials</a></li>
            </ul>
          </li>
          <li>
            <a href="#" class="desktop-link">Services</a>
            <input type="checkbox" id="show-services"/>
            <label for="show-services">Services</label>
            <ul>
              <li><a href="#">Common Tower Registration Portal</a></li>
              <li><a href="#">Government Video Conferencing Services (GVCS)</a></li>
              <li><a href="#">RapidPass</a></li>
              <li><a href="#">Philippine National Public Key Infrastructure</a></li>
              <li><a href="#">Postal Registration</a></li>
              <li><a href="#">INFORMATION SYSTEMS STRATEGIC PLAN</a></li>
              <li><a href="#">Trainings</a></li>
              <li><a href="#">How to Avail GovMail</a></li>
              <li><a href="#">Recognition Scheme of All Cybersecurity Assessment Providers</a></li>
              <li><a href="#">Government Website Hosting Service</a></li>
            </ul>
          </li>
          <li>
            <a href="#" class="desktop-link">Insurances</a>
            <input type="checkbox" id="show-services"/>
            <label for="show-services">Insurances</label>
            <ul>
              <li><a href="#">Department Circulars</a></li>
              <li><a href="#">Department Orders</a></li>
              <li><a href="#">Reports</a></li>
            </ul>
          </li>
          <li>
            <a href="#" class="desktop-link">Resources</a>
            <input type="checkbox" id="show-services"/>
            <label for="show-services">Resources</label>
            <ul>
              <li><a href="#">Related Laws, Policies</a></li>
              <li><a href="#">Notice of Consultation and Submission - Agency Rulemaking on the Policy on Shared Passive ICT Infrastructure: Common Towers</a></li>
              <li><a href="#">BASS - Bandwidth and Signal Statistics</a></li>
              <li><a href="#">National Competency Standard for e-Center Knowledge Workers</a></li>
              <li><a href="#">DICT's Peoples FOI Manual</a></li>
              <li><a href="#">National Broadband Plan</a></li>
              <li><a href="#">National Cybersecurity Plan 2022</a></li>
              <li><a href="#">PH Framework for the DTTB Migration Plan</a></li>
              <li><a href="#">Infrastructure Cybersecurity Campaign</a></li>
              <li><a href="#">Rules on the Accelerated Roll Out of Common Towers in the Philippines</a></li>
              <li><a href="#">Digital Cities 2025</a></li>
              <li><a href="#">Downloads</a></li>
            </ul>
          </li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Transparency</a></li>
        </ul>
      </div>
      <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
      <form action="#" class="search-box">
        <input type="text" placeholder="Type Something to Search..." required/>
        <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
      </form>
    </nav>
  </div>

{/*  <!----Republic Act---->   */}
 <section class="gvcs"/>
  <div class="gvcs-content"/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

      <h1>Government Video Conferencing Service (GVCS)</h1>

          <br/>
          <br/>

          <p>
            Government Video Conferencing Service (GVCS) is a technology that provides video telephony and online chat services through a cloud-based 
            software platform and is used for teleconferencing, telecommuting, distance education, and social relations. It allows users to hold live, 
            visual connections from different locations for the purpose of communication. This service is convenient for government agencies and other 
            institutions because it can be used to hold meetings that may be one-to-one, one-to-group, or group-to-group.
            <br/>
            Aside from making real-time long-distance “face-to-face” communication possible, the tangible benefits of Government Video Conferencing
             Service (GVCS) include saving time and convenience to workforces  as we adjust to the ‘new normal’ environment.
            <br/>
            As the ‘new normal’ requires heavy reliance on technology, we offer the use of Government Video Conferencing Service (GVCS), a video and web 
            conferencing software provided by DICT for the Government of the Philippines. This is one of the solutions that is readily available to ensure
            the continuity of operations and transactions while working remotely.
          </p>

          

          
          <p>For information and guidance of all concerned, please click on the link below:</p>
          <a href="http://www.officialgazette.gov.ph/2016/05/23/republic-act-no-10844/">Republic Act No.10844&nbsp;</a>
          <p>For a complete copy of the Implementing Rules and Regulation, please click on the link below:</p>
          <a href="https://dict.gov.ph/wp-content/uploads/2016/10/DICT-IRR.pdf">Republic Act No. 10844 IRR</a>
          <br/>
          <br>
          <br/></br>
    
      
      </React.Fragment>
  )
 
}
