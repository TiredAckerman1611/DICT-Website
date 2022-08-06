import React from 'react'
import {Link} from 'react-router-dom'


export default function Mandate() {
  return (
    <React.Fragment>
  
 {/*  <!-- DROPDOWN --> */}
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

 {/* <!----Republic Act---->   */}
 <section class="republic"/>
  <div class="republic-content"/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      <h1>Republic Act No. 10844</h1>
          <br/>
          <br/>
          <p><b>Republic Act No. 10844</b>, otherwise known as the <b>“Department of Information and Communications Technology Act of 2015”</b>, which was signed into law on 23 May 2016.</p>
          <p>In accordance to the law, the <b>Department of Information and Communications Technology (DICT)</b> shall be the primary policy, planning, coordinating, implementing, and administrative entity of the Executive Branch of the government that will plan, develop, and promote the national ICT development agenda.</p>
          <br/>
          <p>The DICT shall strengthen its efforts on the following focus areas:</p>
          <p>Policy and Planning<br/>
             Improved Public Access<br/>
             Resource-Sharing and Capacity-Building<br/>
             Consumer Protection and Industry Development</p>
              <br/>
          <p>Apart from this, the DICT is expected to spearhead the following endeavors:</p>
          <p>Nation building Through ICT<br/>
             Safeguarding of Information<br/>
             Advancement of ICT in the Philippines</p>
              <br/>
          <p>Aligning with the current administration’s ICT Agenda, the DICT will prioritize the following:</p>    
          <p>Development of a National Broadband Plan to accelerate the deployment of fiber optic cables and wireless technologies to improve internet speed<br/>
              Provision of Wi-Fi access at no charge in selected public places including parks, plazas, public libraries, schools, government hospitals, train stations, airports, and seaports<br/>
              Development of a National ICT Portal</p>
              <br/>
          <p>For information and guidance of all concerned, please click on the link below:</p>
          <a href="http://www.officialgazette.gov.ph/2016/05/23/republic-act-no-10844/">Republic Act No.10844&nbsp;</a>
          <p>For a complete copy of the Implementing Rules and Regulation, please click on the link below:</p>
          <a href="https://dict.gov.ph/wp-content/uploads/2016/10/DICT-IRR.pdf">Republic Act No. 10844 IRR</a>
          <br/>
          <br/>
          <br/>
      
      </React.Fragment>
  )
 
}
