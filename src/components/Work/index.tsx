import React from "react";
import "../../App.css";
import "./style.scss";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { works } from "../../data/work";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Work = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1,
    );
  };
  return (
    <section id="work">
      <h5>The work experience that I have</h5>
      <h2>My work</h2>

      <div className="container work__container">
        <div className="carousel">
          {/* Left Arrow */}
          <button className="arrow left" onClick={prevSlide}>
            <FaArrowLeft />
          </button>

          {/* Work Sections */}
          {works.map((work, index) => {
            return (
              <div
                className={`work__section ${
                  index === currentIndex ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="chips_container">
                  {work.labels.map((label, i) => (
                    <span className="details_chip" id={label.type} key={i}>
                      {label.value}
                    </span>
                  ))}
                </div>
                <h3>{work.description}</h3>
                <div className="work_content">
                  <div className="work_content_title">
                    Day to Day Responsibilities:
                  </div>

                  {work.data.map((data, i) => (
                    <div className="work_content_details" key={i}>
                      <BsFillPatchCheckFill className="work__details-icon" />
                      <span>{data.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Right Arrow */}
          <button className="arrow right" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
