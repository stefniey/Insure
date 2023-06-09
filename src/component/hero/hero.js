import React from 'react';
import "./hero.scss";
import { images } from  '../../images';
const Hero = () =>{
  return <div>
    <div className='hero'>
      <div className="right-top-image">
        <picture>
          <source media="(max-width:767px)" srcset={images.intro_right_mobile}/>
          <img src={images.intro_right} alt="" />
        </picture>

      </div>
      <div className="hero_wrapper container">
        <div className="hero_content">
          <h1 className='title1'>Humanizing <br /> your insurance.</h1>

          <p className='hero_text'>
            Get your life insurance coverage easier and faster. We blend our expertise 
            and technology to help you find the plan that’s right for you. Ensure you 
            and your loved ones are protected.
          </p>
          <button className='btn'>VIEW PLANS</button>
        </div>
        <div className="hero_image">
        <picture>
          <source media="(max-width:767px)" srcset={images.intro_mobile }/>
          <img src={images.intro_desktop} alt="" />
        </picture>

        </div>
      </div>
      <div className="left-bottom-image">
      <picture>
          <source media="(max-width:767px)" srcset={images.intro_left_mobile}/>
          <img src={images.intro_left} alt="" />
        </picture>

      </div>

    </div>
    </div>
};

export default Hero;



