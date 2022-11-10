import "./home.css";

import profile from "../../assets/images/profile--pic.png";
import aboutImage from "../../assets/images/about.png";
import skillImage from "../../assets/images/skills.png";
import projects from "../../assets/images/projects-transparent.png";
const Home = () => {
  // Can also be included with a regular script tag

  return (
    <section className="body">
      <div className="header">
        <span className="intro"> Hi I'm Akanlegum John Apobonah</span>
        <h1>
          I'm a<span className="multi--text"> Coder</span>
        </h1>
        <p>
          You are welcome to my portfolio website, feel free to navigate around
        </p>

        <main className="main--items">
          <div>
            <img src={aboutImage} alt="about me" />
            <h4>About </h4>
          </div>
          <div>
            <img src={skillImage} alt="skills" />
            <h4>Skills</h4>
          </div>
          <div>
            <img src={projects} alt="projects" />
            <h4>Projects</h4>
          </div>
        </main>
        <div className="header--btns">
          <button>Download CV</button>
          <button>Hire Me</button>
        </div>
      </div>
      {/* <div className="other--content ">
        <img src={profile} alt="profile pic" />
      </div> */}
    </section>
  );
};

export default Home;
