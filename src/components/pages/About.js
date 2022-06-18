import '../../css/about.css';

const About = () => {
  return (
    <>
      <h1 className="about-header text-center container">More About Me :</h1>
      <h4 className="about-text container">
        {' '}
        Detail-oriented Full Stack Software Engineer with a passion for frontend
        design and the user experience. Motivated self-starter excited about
        creating responsive and efficient web-based experiences. Skilled in
        creative problem solving while collaborating and communicating with
        compassion and empathy. A strong believer in the importance of learning
        and forever having a growth mindset. Patient problem solver with the
        ability to multi-task and deliver in high pressure, chaotic
        environments. A professional background in artist management, graphic
        design and social media marketing, developing grit, flexibility and a
        dedicated work ethic.{' '}
      </h4>
      <div className="about-section">
        <div className="section-divider">
          <div className="frontend">
            <h2 className="front-title">Frontend Development </h2>
            <ul className="front-end-list">
              <li className="skills-items">HTML</li>
              <li className="skills-items">CSS</li>
              <li className="skills-items">JavaScript</li>
              <li className="skills-items">React</li>
              <li className="skills-items">Graphic Design</li>
              <li className="skills-items">UX/UI </li>
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
