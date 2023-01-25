import React from 'react';
import './header.css';
import CTA from './CTA';
import myImage from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="sub__text">Hello I'm</h5>
        <h1>MD. Shahadot Hossain</h1>
        <h5 className="text-light sub__text">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={myImage} alt="shahadot" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
