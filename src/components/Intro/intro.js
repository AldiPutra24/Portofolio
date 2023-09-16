import React from 'react'
import TypeIt from "typeit-react";
import './intro.css'
import btnImg from '../../assets/hireme.png'
import Lottie from 'lottie-react';
import WatermelonJSON from '../../assets/robot.json'
import {Link} from 'react-scroll';

const Intro = () => {

  return (
    <section id='intro'>
        <div className='introContent'>
          <TypeIt >
            <span className='Hello'>Hello,<br/></span>
            <span className='introText'>
                I'm 
                <span className='introName'> Aldi</span>
            </span>
          </TypeIt>
            <p  className='introP'>My programming skills contribute to driving the technology industry forward <br/>and making a significant impact on advancing the digital world.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>
        </div>
        <Lottie className='bg' loop={true} animationData={WatermelonJSON} />
    </section>
  )
}

export default Intro