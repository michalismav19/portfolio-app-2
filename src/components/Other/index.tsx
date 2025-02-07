import React from "react";
import "../../App.css";
import "./style.scss";
// import { BsFillPatchCheckFill } from "react-icons/bs";
import { others } from "../../data/other";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Other = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? others.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === others.length - 1 ? 0 : prevIndex + 1
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
          {others.map((other, index) => {
            return (
              <div
                className={`work__section ${
                  index === currentIndex ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className='chips_container'>
                  <span className='details_chip main_chip' id={other.label}>
                    {other.label}
                  </span>
                </div>
                <h3>{other.title}</h3>
                <span className='other_info'>{other.year}</span>
                <span className='other_info'>{other.university}</span>
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

export default Other;
