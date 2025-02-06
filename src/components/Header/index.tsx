// import React from "react";
import "./style.css";
import CTA from "./CTA";
import me from "../../assets/profile-photo.png";
import HeaderSocials from "./socials";
// import Typist from "react-typist";
import { useTypewriter } from "react-simple-typewriter";

const Header: React.FC = () => {
  const [introText] = useTypewriter({
    words: ["Hello, I'm"],
    loop: 1, // Infinite loop
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  const [name] = useTypewriter({
    words: ["Michalis Mavromatakis"],
    loop: 1, // Infinite loop
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 4000,
  });
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>{introText}</h5>
        <h1>{name}</h1>
        <h5 className='text-light'>Lead Software Engineering</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={me} alt='me' />
        </div>

        <a href='#contacts' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
