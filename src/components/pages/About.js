import '../../css/about.css';

const About = () => {
  return (
    <>
      <h1 className="about-header text-center"> Skills</h1>
      <div className="about-section">
        <div className="section-divider">
          <div className="frontend">
            <h2 className="font-title">Frontend Development </h2>
            <ul className="front-end-list">
              <li className="skills-items">HTML</li>
              <li className="skills-items">CSS</li>
              <li className="skills-items">JavaScript</li>
              <li className="skills-items">React</li>
              <li className="skills-items">UX</li>
            </ul>
          </div>
          <div className="backend">
            <h2 className="back-title">Backend Development </h2>
            <ul className="back-end-list">
              <li className="skills-items">Node JS</li>
              <li className="skills-items">Express</li>
              <li className="skills-items">MongoDB</li>
              <li className="skills-items">MySQL</li>
              <li className="skills-items">Python</li>
              <li className="skills-items">Django</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
