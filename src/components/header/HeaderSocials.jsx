import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import './header.css';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/shahadot786"
        target="_blank"
        title="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/shrcreation" target="_blank" title="GitHub">
        <FaGithub />
      </a>
      <a
        href="https://web.facebook.com/shahadot.shr.rahat/"
        target="_blank"
        title="Facebook"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
