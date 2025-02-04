// import React from "react";
import "./style.css";
import CTA from "./CTA";
import me from "../../assets/profile-photo.png";
import HeaderSocials from "./socials";

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Michalis Mavromatakis</h1>
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
