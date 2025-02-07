import React from "react";
import "../../App.css";
import { seminars } from "../../data/seminars";
import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

const Seminar = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? seminars.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === seminars.length - 1 ? 0 : prevIndex + 1,
    );
  };
  return (
    <section id="work">
      <h5>The seminars that I have completed</h5>
      <h2>My seminars</h2>

      <div className="container work__container">
        <div className="carousel">
          {/* Left Arrow */}
          <button className="arrow left" onClick={prevSlide}>
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
                <div className="chips_container">
                  <span className="details_chip main_chip" id={seminar.label}>
                    {seminar.label}
                  </span>
                </div>
                <h3>{seminar.title}</h3>
                <span className="container_info">
                  <FaCalendarAlt
                    className="year_icon"
                    display={seminar.year ? "inline" : "none"}
                  />
                  {seminar.year}
                </span>
                <span className="container_info">
                  <CgDetailsMore
                    className="year_icon"
                    display={seminar.description ? "inline" : "none"}
                  />
                  {seminar.description}
                </span>
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

export default Seminar;
