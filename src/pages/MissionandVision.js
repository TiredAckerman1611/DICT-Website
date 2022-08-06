import React from 'react'
import {Link} from 'react-router-dom'


export default function Mandate() {
  return (
    <React.Fragment>
  
{/* <!-- DROPDOWN --> */}
<div class="wrapper">
    <nav>
      <input type="checkbox" id="show-search"/>
      <input type="checkbox" id="show-menu"/>
      <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
      <div class="content">
      <div class="logo"><a href="#">GOV.PH</a></div>
        <ul class="links">
          <li><a href="index.html">Home</a></li>
          
          <li>
            <a href="#" class="desktop-link">About Us</a>
            <input type="checkbox" id="show-features"/>
            <label for="show-features">About Us</label>
            <ul>
              <li><a href="mandate.html" target="_blank">Mandate, Powers and Function</a></li>
              <li><a href="MissionandVision.html">Mission and Vision</a></li>
              <li><a href="DICT-Citizen_s-Charter.pdf" target="_blank">Citizen's Charter</a></li>
              <li><a href="RA10844.html" target="_blank">Republic Act. No. 10844</a></li>
              <li>
                <a href="#" class="desktop-link">Attached Agencies</a>
                <input type="checkbox" id="show-services"/>
                <label for="show-services">Attached Agencies</label>
                <ul>
                  <li><a href="#">National telecommunications Commission (NTC)</a></li>
                  <li><a href="#">National Privacy Commission (NPC)</a></li>
                  <li><a href="#">Cybercrime Investigation and Coordinating Center (CICC)</a></li>
                </ul>
              </li>

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

{/*  <!--mission and vision--> */}
    <section class="mission"/>
        <div class="mission-content"/>
                <br/>
                <br/>
                <br/>
                <br/>
            <h1>Mission and Vision</h1>
                <br/>
          
            <h2>Mission</h2>
                <p>“DICT of the people and for the people.”</p>
                <p>The Department of Information and Communications Technology commits to:</p>
                <p>Provide every Filipino access to vital ICT infostructure and services <br/>
                Ensure sustainable growth of Philippine ICT-enabled industries resulting to creation of more jobs<br/>
                Establish a One Digitized Government, One Nation<br/>
                Support the administration in fully achieving its goals<br/>
                Be the enabler, innovator, achiever and leader in pushing the country’s development and transition towards a world-class digital economy</p>

                <br/>
                
            <h3>Vision</h3>
                <p>“An innovative, safe and happy nation that thrives through and is enabled by Information and Communications Technology.”</p>
                <p>DICT aspires for the Philippines to develop and flourish through innovation and constant development of ICT 
                    in the pursuit of a progressive, safe, secured, contented and happy Filipino nation.</p>

                    <br/>
            <h4>Core Values</h4>
            <p>  D – Dignity <br/>
                 I – Integrity <br/>
                 C – Competency and Compassion<br/>
                 T – Transparency</p>
            <br/>
            <br></br>
    
      
      </React.Fragment>
  )
 
}
