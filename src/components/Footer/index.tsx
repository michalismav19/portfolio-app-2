// import React from "react";
import "./style.scss";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <a href='#home' className='footer__logo'>
        MICHALIS MAVROMATAKIS
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#work'>Work</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/michalis-mavromatakis/'>
          <BsLinkedin />
        </a>
        <a href='https://github.com/michalismav19'>
          <BsGithub />
        </a>
        <a href='https://www.facebook.com/michalis.mavromatakis/'>
          <BsFacebook />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; {currentYear} Michalis Mavromatakis</small>
      </div>
    </footer>
  );
};

export default Footer;
