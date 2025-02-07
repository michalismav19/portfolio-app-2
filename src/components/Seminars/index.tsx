import React from "react";
import "../../App.css";
import "./style.scss";
// import { BsFillPatchCheckFill } from "react-icons/bs";
import { seminars } from "../../data/seminars";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Seminar = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? seminars.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === seminars.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section id='work'>
      <h5>The work work that I have</h5>
      <h2>My work</h2>

      <div className='container work__container'>
        <div className='carousel'>
          {/* Left Arrow */}
          <button className='arrow left' onClick={prevSlide}>
            <FaArrowLeft />
          </button>

          {/* Work Sections */}
          {seminars.map((seminar, index) => {
            return (
              <div
                className={`work__section ${
                  index === currentIndex ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className='chips_container'>
                  <span className='details_chip main_chip' id={seminar.label}>
                    {seminar.label}
                  </span>
                </div>
                <h3>{seminar.title}</h3>
                <span className='other_info'>{seminar.description}</span>
              </div>
            );
          })}

          {/* Right Arrow */}
          <button className='arrow right' onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Seminar;
