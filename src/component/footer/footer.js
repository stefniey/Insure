import React from 'react'
import './footer.scss';
import { images } from '../../images';
const Footer = () =>{
  return (
  <div>
    <footer>

      <div className="container">
        <div className="footer">
          <div className="footer-header">
              <div className="logo">
                <img src={images.logo} alt="" />
                </div>
                <div className="socials-media-icons">
                  <img src={images.fb} alt="" />
                  <img src={images.twitter} alt="" />
                  <img src={images.insta} alt="" />
                  <img src={images.pinterest} alt="" />
                </div>
                </div>
                <div className="footer-menu">
                  <div className="our-company">
                    <h4>Our Company</h4>
                    <ul>
                      <li>How we work</li>
                      <li>Why Insure</li>
                      <li>Views Plans</li>
                      <li>Review</li>
                    </ul>
                  </div>

                  <div className="our-company">
                    <h4> Help Me</h4>
                    <ul>
                      <li>FAQ</li>
                      <li>Terms of use</li>
                      <li>Privacy policy</li>
                      <li>Cookies</li>
                    </ul>

                  </div>

                  <div className="our-company">
                    <h4>Contact</h4>
                    <ul>
                      <li>Sales</li>
                      <li>Support</li>
                      <li>Email us</li>
                      <li>Live chat</li>
                    
                    </ul>

                  </div>

                      <div className="our-company">
                    <h4>Others</h4>
                    <ul>
                      <li>Careers</li>
                      <li>Offers</li>
                      <li>Press</li>
                      <li>Licenses</li>
                    </ul>

                  </div>
              </div>
      
        </div>
      </div>
    </footer>


  </div>
    );
};

export default Footer;

