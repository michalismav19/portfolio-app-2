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
    <section id='experience'>
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>

          <div className='experience__content'>
            {frontendSkills.map((skill) => (
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* End of frontend part */}

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {backendSkills.map((skill) => (
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='experience__backend'>
          <h3>DevOps Development</h3>
          <div className='experience__content'>
            {devOpsSkills.map((skill) => (
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Other Development</h3>
          <div className='experience__content'>
            {otherSkills.map((skill) => (
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
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
