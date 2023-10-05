import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faInstagram,faFacebook,faLinkedin,faBehance } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <div className='Footer'>
      <div className='upfooter'>
        <div className='up1'>
        <i>
          <img src="https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/cropped-Group-1333.png" />
        </i>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formed humour</p>
        </div>
        <div className='up2'>
          <h3>Meet Phlox</h3>
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Team</li>
            <li>Contact Us</li>
            <li>Our Ecosystem</li>
           </ul>
        </div>
        <div className='up2'>
          <h3>Quicl Link</h3>
           <ul>
            <li>News</li>
            <li>Articles</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>License</li>
            <li>Freebies</li>
           </ul>
        </div>
        <div className='up2'>
          <h3>Category Link</h3>
           <ul>
            <li>Graphics</li>
            <li>Videos</li>
            <li>Presentation</li>
            <li>Photos</li>
            <li>Font</li>
            <li>Web Templates</li>
           </ul>
        </div>
        <div className='up3'>
         <h3>Follow us</h3>
         <div className='socialicon'>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faBehance}/>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faLinkedin}/>
          <FontAwesomeIcon icon={faFacebook}/>
         </div>
         <div className='help'>
          <h3>Subscribe</h3>
          <p>Send me tips, trends, freebies, updates & offers.</p>
          <div class="search-bar">
          <input type="text" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </div>
         </div>
        </div>
      </div>
      <div className='downfooter'>
        <p>© 2023 Electronic Shop - Phlox Elementor WordPress Theme. All rights reserved.</p>
        <span className='downfooterspan1'>Terms and Conditions | Privacy Policy</span>
        
      </div>
    </div>
  )
}

export default Footer