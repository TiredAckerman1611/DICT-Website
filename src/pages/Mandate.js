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
            <li><Link to="/"> Home</Link></li>
              
              <li>
                <a href="#" class="desktop-link">About Us</a>
                <input type="checkbox" id="show-features"/>
                <label for="show-features">About Us</label>
                <ul>
                <li><Link to="Mandate"> Mandate, Powers, and Functions</Link></li>
                  <li><a href="MissionandVision.html" target="_blank">Mission and Vision</a></li>
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
    

     <section class="main-body"/>
      <section class="About-Us">
          <div class="about-us-content">
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
              <h1>Mandate, Powers and Functions</h1>
                  <br/>
                  <br/>
              <h2>MANDATE</h2>
    
                  <p>The Department of Information and Communications Technology (DICT) shall be the primary policy, planning, coordinating, implementing, 
                  and administrative entity of the Executive Branch of the government that will plan, 
                  develop, and promote the national ICT development agenda. (RA 10844)</p>
                  <br/>
                  <br/>
              <h3>POWERS AND FUNCTIONS</h3>
              <h4>I. Policy and Planning</h4> 
    
                  <p>(a) Formulate, recommend and implement national policies, plans, 
                  programs and guidelines that will promote the development and use of ICT with due consideration to the advantages of convergence and emerging technologies;</p>
              
                  <p>(b) Formulate policies and initiatives, in coordination with the Department of Education (DepED), the Commission on Higher Education (CHED),
                   and the Technical Education and Skills Development Authority (TESDA), 
                   to develop and promote ICT in education consistent with the national goals and objectives, 
                   and responsive to the human resource needs of the ICT and ICT-enabled services (ICT-ES) sectors;</p>
    
                   <p>(c) Provide an integrated framework in order to optimize all government ICT resources and networks for the identification and prioritization of all
                   E-Government systems and applications as provided for the E-Government Masterplan and the Philippine Development Plan (PDP);</p>
                  <br/>
    
              <h5>II. Improved Public Access</h5>
    
                  <p>(d) Prescribe rules and regulations for the establishment, operation and maintenance of ICT infrastructures in unserved and underserved areas,
                   in consultation with the local government units (LGUs), civil society organizations (CSOs), private sector, and the academe;</p>
              
                  <p>(e) Establish a free internet service that can be accessed in government offices and public areas using the most cost-effective telecommunications technology,
                   through partnership with private service providers as may be necessary;</p>
    
                   <br/>
    
              <h6>III. Resource-sharing and Capacity Building</h6>
    
                  <p>(f) Harmonize and coordinate all national ICT plans and initiatives to ensure knowledge, information and resource-sharing,
                   database-building and agency networking linkages among government agencies, 
                  consistent with E-Government objectives in particular, and national objectives in general;</p>
                  <p>(g) Ensure the development and protection of integrated government ICT infrastructures and designs, 
                  taking into consideration the inventory of existing manpower, plans, programs, software, hardware, and installed systems;</p>
                  <p>(h) Assist and provide technical expertise to government agencies in the development of guidelines in the enforcement and administration of laws, 
                  standards, rules, and regulations governing ICT;</p>
                  <p>(i) Assess, review and support ICT research and development programs of the government in coordination with the Department of 
                  Science and Technology (DOST) and other institutions concerned;</p>
                  <p>(j) Prescribe the personnel qualifications and other qualification standards essential to the effective 
                  development and operation of government ICT infrastructures and systems;</p>
                  <p>(k) Develop programs that would enhance the career advancement opportunities of ICT workers in government;</p>
                  <p>(l) Assist in the dissemination of vital information essential to disaster risk reduction through the use of ICT;</p>
                  <p>(m) Represent and negotiate for Philippine interest on matters pertaining to ICT in international bodies,
                   in coordination with the Department of Foreign Affairs (DFA) and other institutions concerned;</p>
    
                   <br/>
          </div>
    
      </section>
    
      {/*  <!----Mandate, Powers and Functions---->  */} 
      <section class="letters">
          <div class="letters-content">
              <h1>IV. Consumer Protection and Industry Development</h1>
                  <p>(n) Ensure and protect the rights and welfare of consumers and business users to privacy, security and confidentiality in matters relating to ICT,
                   in coordination with agencies concerned, the private sector and relevant international bodies;</p>
                  <p>(o) Support the promotion of trade and investment opportunities in the ICT and ICT-ES sectors, in coordination with the 
                  Department of Trade and Industry DTI_ and other relevant government agencies and the private sector;</p>
                  <p>(p) Establish guidelines for public-private partnerships in the implementation of ICT projects for government agencies;</p>
                  <p>(q) Promote strategic partnerships and alliances between and among local and international ICT , research and development, 
                  educational and training institutions to speed up industry growth and enhance competitiveness of Philippine workers, firms,
                   and small and medium enterprises in the global markets for ICT and ICT-ES;</p>
    
                   <br/>
              <h2>V. Cybersecurity Policy and Program Coordination</h2>
                  <p>(r) To formulate a national cybersecurity plan consisting of robust and coherent strategies that would minimize national security risks in order to promote a peaceful,
                   secure, open and cooperative ICT environment;</p>
                  <p>(s) To extend immediate assistance for the suppression of real-time commission of cybercrime offenses and cyber-attacks against critical infrastructures and/or affecting 
                  national security through a computer emergency response team (CERT);</p>
                  <p>(t) To provide pro-active government countermeasures to address and anticipate all domestic and transnational incidents affecting the 
                  Philippine cyberspace and any cybersecurity threats to the country;</p>
                  <p>(u) To enhance the public-private partnership in the field of information sharing involving cyber-attacks, threats and vulnerabilities,
                   and to coordinate in the preparation of appropriate and effective measures to prevent and suppress cybercrime as provided in R.A. No. 10175</p>
                  <p>(v) To monitor cybercrime cases being handled by participating law and prosecution agencies, and to facilitate international cooperation on intelligence,
                   investigations, training and capacity building related to cybercrime prevention, suppression, and prosecution;</p>
                  <p>(w) To coordinate the support participation of the business sector, local government units and nongovernment organizations in 
                  cybercrime prevention programs and other related projects;</p>
                  <p>(x) To recommend the enactment of appropriate laws, issuances, measures and policies;</p>
                  <p>(y) To call upon any government agency to render assistance in the accomplishment of the Department’s mandated tasks and functions;</p>
                  <p>(z) To perform all other matters related to cybercrime prevention and suppression including capacity building and such other functions 
                  and duties as may be necessary for the proper implementation of R.A. No. 10175;</p>
    
              <br/>
    
              <h3>VI. Countryside Development</h3>
                  <p>(aa) Formulate policies in consultation with local government units and other local stakeholders and line agencies for the implementation of responsive,
                   relevant and comprehensive ICT-related strategies to improve the competitiveness of provincial locations for ICT and ICT-ES industry in order to develop 
                   balanced investments between high-growth and economically-depressed areas and to promote the development and widespread use of ICT;</p>
                  <p>(bb) Develop plans and programs in coordination with LGUs and other local stakeholders and line agencies to ensure that universal access to ICT services
                   and infrastructure are effectively utilized to generate investments and opportunities in the rural area or areas unserved by private sector;</p>
                  <p>(cc) Assist, guide and support ICT-related activities and initiatives for countryside economic development; and</p>
                  <p>(dd) Promote and assist LGUs and local stakeholders in developing specialized ICT-enabled investments areas by providing technical and industry-calibrated 
                  assistance in the use of ICT for the enhancement of key public services, development and promotion of local arts and culture, tourism, digital literacy, and talent development.</p>
    
                  <br/>
                  <br/>
    
    
                  <p>Please <a href="pdf/mandate.pdf" download>click</a> here to download a copy of the DICT’s Mandate, Powers and Functions.</p>
    
          </div>
      </section>
      </React.Fragment>
  )
 
}
