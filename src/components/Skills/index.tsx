import "./style.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import {
  frontendSkills,
  backendSkills,
  devOpsSkills,
  otherSkills,
} from "../../data/skills";

const Skills = () => {
  return (
    <section id='skills'>
      <h5>The skills I have</h5>
      <h2>My Skills</h2>

      <div className='container skills__container'>
        <div className='skills__frontend'>
          <h3>Frontend Development</h3>

          <div className='skills__content'>
            {frontendSkills.map((skill, index) => (
              <article className='skills__details' key={index}>
                <BsFillPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* End of frontend part */}

        <div className='skills__backend'>
          <h3>Backend Development</h3>
          <div className='skills__content'>
            {backendSkills.map((skill, index) => (
              <article className='skills__details' key={index}>
                <BsFillPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='skills__backend'>
          <h3>DevOps Development</h3>
          <div className='skills__content'>
            {devOpsSkills.map((skill, index) => (
              <article className='skills__details' key={index}>
                <BsFillPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='skills__backend'>
          <h3>Other Development</h3>
          <div className='skills__content'>
            {otherSkills.map((skill, index) => (
              <article className='skills__details' key={index}>
                <BsFillPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
