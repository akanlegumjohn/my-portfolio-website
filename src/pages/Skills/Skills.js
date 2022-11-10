import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJava,
  faNodeJs,
  faGit,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHtml5, faJava, faNodeJs, faCss3, faGit, faJs);
const Skills = () => {
  return (
    <section className="skill--content">
      <div className="front--end ">
        <h1>Frontend</h1>
        <div className="col1">
          <div>
            <FontAwesomeIcon icon={faHtml5} />
            <p>html 5</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCss3} />
            <p>css 3</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faJs} />
            <p>javascript</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faReact} />
            <p>react js</p>
          </div>
        </div>
      </div>
      <div className="back--end ">
        <h1>Backend</h1>
        <div className="col1">
          <div>
            <FontAwesomeIcon icon={faJs} />
            <p>javascript</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faNodeJs} />
            <p>node js</p>
          </div>
        </div>
      </div>
      <div className="others ">
        <h1>Other Skills</h1>
        <div className="col1">
          <div>
            <FontAwesomeIcon icon={faGit} />
            <p>git</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faJava} />
            <p>java</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
