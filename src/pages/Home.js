import React from 'react'


export default function Home() {
  return (
    <React.Fragment>
       {/*  <!--
Video Background

<video src="videos/vid3.mp4" autoplay loop playsinline muted></video>
--> */}


    <div class="wrapper">
    <nav>
      <input type="checkbox" id="show-search"/>
      <input type="checkbox" id="show-menu"/>
      <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>

      <div class="content">
      <div class="logo"><a href="https://www.gov.ph/" target="_blank">GOV.PH</a></div>
        <ul class="links">
          <li><a href="#">Home</a></li>
          
          <li>
            <a href="#" class="desktop-link">About Us</a>
            <input type="checkbox" id="show-features"/>
            <label for="show-features">About Us</label>
            <ul>
              <li></li>
              <li><a href="MissionandVision.html" target="_blank">Mission and Vision</a></li>
              <li><a href="pdf/DICT-Citizen_s-Charter.pdf" target="_blank">Citizen's Charter</a></li>
              <li><a href="RA10844.html" target="_blank">Republic Act. No. 10844</a></li>

              <li> 
                <a href="#" class="desktop-link">Attached Agencies</a>
                <input type="checkbox" id="show-services"/>
                <label for="show-services">Attached Agencies</label>

                <ul>
                  <li><a href="#">National Telecommunications Commission (NTC)</a></li>
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
              <li><a href="https://commontower.gov.ph/" target="_blank">Common Tower Registration Portal</a></li>
              <li><a href="GVCS.html">Government Video Conferencing Services (GVCS)</a></li>
              <li><a href="https://dict.gov.ph/rapidpass/" target="_blank">RapidPass</a></li>
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
              <li><a href="https://dict.gov.ph/department-circulars/" target="_blank">Department Circulars</a></li>
              <li><a href="https://dict.gov.ph/department-order/" target="_blank">Department Orders</a></li>
              <li><a href="https://dict.gov.ph/category/reports/" target="_blank">Reports</a></li>
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

          <li><a href="https://dict.gov.ph/careers/" target="_blank">Careers</a></li>
          <li><a href="https://dict.gov.ph/contact-us/" target="_blank">Contact Us</a></li>
          <li><a href="https://dict.gov.ph/transparency/" target="_blank">Transparency</a></li>
        </ul>
      </div>
      <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
      <form action="#" class="search-box">
        <input type="text" placeholder="Type Something to Search..." required/>
        <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
      </form>
    </nav>
  </div>

{/* <!-- BLUE SECTION --> */}
<section class="blue-section">
    <div class="blue">
                <img class="dictlogo_blue" src="https://dict.gov.ph/wp-content/uploads/2019/12/DICT-Banner-Logo-for-dark-background300px.png"/>
                <img class="leading-way" src="https://dict.gov.ph/wp-content/uploads/2022/05/LEADING-THE-WAY-and-CHIP-04-300x54.png"/>

        </div>
        </section>

        
{/* <!--lorem--> */}
<section class="lorem">
  <div class="lorem-lorem">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem, perspiciatis aspernatur reiciendis
   excepturi, quia numquam assumenda, cupiditate non mollitia aliquam repellendus. Rerum explicabo iste nihil ea, quidem sint hic.</p>
  </div>  
</section>

{/* <!--lorem2--> */}
<section class="lorem2">
  <div class="lorem-lorem2">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem, perspiciatis aspernatur reiciendis
   excepturi, quia numquam assumenda, cupiditate non mollitia aliquam repellendus. Rerum explicabo iste nihil ea, quidem sint hic.</p>
  </div>  
</section>

{/* <!--FOOTER--> */}
<footer>
  <div class="main-content">
    <div class="left box">
      <h2>REPUBLIC OF THE PHILIPPINES</h2>
      <div class="content">
        <p>All content is in the public domain unless otherwise stated.</p>
        <div class="social">
          <a href="https://www.facebook.com/dictilocosnorteLC1"><span class="fab fa-facebook-f"></span></a>
          <a href="#"><span class="fab fa-twitter"></span></a>
          <a href="https://www.instagram.com/dictgovph/"><span class="fab fa-instagram"></span></a>
          <a href="https://www.youtube.com/user/GovPH"><span class="fab fa-youtube"></span></a>
        </div>
      </div>
    </div>
    <div class="center box">
      <h2>About GOVPH</h2>
      <div class="content">
        <div class="place">
          <p>Learn more about the Philippine government, its structure,</p> 
          <p>how government works and the people behind it.</p>
        </div>
        <br/>
        <br/>
        <div class="govlinks">
            <a href="https://www.gov.ph/"><span class="text">GOVPH</span></a>
            <br/>
            <a href="https://www.gov.ph/data"><span class="text">Open Data Portal</span></a>
            <br/>
            <a href="https://www.officialgazette.gov.ph/"><span class="text">Official Data Gazette</span></a>
        </div>
      </div>
    </div>
    <div class="right box">
      <h2>Government Links</h2>
      <div class="content">
        <form action="#">
            <div class="govph">
                <a href="https://president.gov.ph/"><span class="text">Office of the President</span></a>
            </div>
            <div class="opendataportal">
                <a href="https://ovp.gov.ph/"><span class="text">Office of the Vice President</span></a>
            </div>
            <div class="ODG">
                <a href="http://legacy.senate.gov.ph/"><span class="text">Senate of the Office</span></a>
            </div>
            <div class="govph">
                <a href="https://www.congress.gov.ph/"><span class="text">House of the Representatives</span></a>
            </div>
            <div class="opendataportal">
                <a href="https://sc.judiciary.gov.ph/"><span class="text">Supreme Court</span></a>
            </div>
            <div class="ODG">
                <a href="http://ca.judiciary.gov.ph/"><span class="text">Court of Appeals</span></a>
            </div>
            <div class="govph">
                <a href="https://sb.judiciary.gov.ph/"><span class="text">Sandigang Bayan</span></a>
            </div>
            <div class="govph">
              <a href="https://ilocosnorte.gov.ph/"><span class="text">Provincial Government of Ilocos Norte</span></a>
          </div>
        </form>
      </div>
    </div>
  </div>
</footer>
    </React.Fragment>
  )
}
