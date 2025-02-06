// import React from "react";
import "./style.css";
import myImage from "../../assets/profile-photo.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={myImage} alt='Me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <GiGraduateCap className='about__icon' />
              <h5>Degree</h5>
              <small>
                Bsc. Department of Management Science and Technology <br />
                <i>AEUB</i>
              </small>
            </article>

            <article className='about__card'>
              <BsBookmarkStar className='about__icon' />
              <h5>GPA</h5>
              <small>7.2</small>
            </article>

            <article className='about__card'>
              <TfiWorld className='about__icon' />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Web Programming</li>
                  <li>Software Engineering</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            Experienced <b>Lead Full Stack Software Engineer</b> with a
            demonstrated history of working in the software engineer with
            knowledge of complete product lifecycle through requirements,
            analysis, data modeling, design, development, testing, documentation
            and delivery of projects. Experienced in HTML, CSS, SCSS,
            JavaScript, ReactJs, NextJs, Typescript, NodeJs and PHP. Strong
            engineering professional with a Bachelor's degree focused in
            Department of Management Science and Technology from Athens
            University of Economics and Business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
