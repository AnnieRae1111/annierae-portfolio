import '../../css/about2.css';
import '../../css/about.css';
import me from '../../assets/annierae-profile-photo.jpeg';
const AboutTwo = () => {
  return (
    <>
      <h1 className="about-header-two text-center container">
        More About Me :
      </h1>{' '}
      <div className="about-two-container container">
        <div className="about-image-container">
          <img className="about-two-image" src={me} alt="" />
        </div>
        <div className="about-text-two">
          <div className="text-container-two">
            <h4 className="about-two-h4">
              Detail-oriented Full Stack Software Engineer with a passion for
              frontend design and the user experience. Motivated self-starter
              excited about creating responsive and efficient web-based
              experiences. Skilled in creative problem solving while
              collaborating and communicating with compassion and empathy. A
              strong believer in the importance of learning and forever having a
              growth mindset. Patient problem solver with the ability to
              multi-task and deliver in high pressure, chaotic environments. A
              professional background in artist management, graphic design and
              social media marketing, developing grit, flexibility and a
              dedicated work ethic.
            </h4>{' '}
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="section-divider">
          <div className="frontend-two">
            <h2 className="front-title-two">Frontend Development </h2>
            <ul className="front-end-list-two">
              <li className="skills-items-two">HTML</li>
              <li className="skills-items-two">CSS</li>
              <li className="skills-items-two">JavaScript</li>
              <li className="skills-items-two">React</li>
              <li className="skills-items-two">UX/UI </li>
              <li className="skills-items-two">Graphic Design</li>
            </ul>
          </div>
          <div className="backend-two">
            <h2 className="back-title-two">Backend Development </h2>
            <ul className="back-end-list-two">
              <li className="skills-items-two">Node JS</li>
              <li className="skills-items-two">Express</li>
              <li className="skills-items-two">MongoDB</li>
              <li className="skills-items-two">MySQL</li>
              <li className="skills-items-two">Python</li>
              <li className="skills-items-two">Django</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
