import '../../css/about2.css';
import '../../css/about.css';
import me from '../../assets/annierae-profile-photo.jpeg';
const AboutTwo = () => {
  return (
    <>
      {/* <h1 className="about-header-two text-center container">
        More About Me :
      </h1>{' '} */}
      <div className="about-two-container container">
        <div className="about-image-container">
          <img className="about-two-image" src={me} alt="" />
        </div>
        <div className="about-text-two">
          <div className="text-container-2">
            <h4 className="about-two-h4">
              <span className="hello-world">Hello World,</span>
              <br />
              I'm a detail-oriented Full Stack Software Engineer with a passion
              for frontend design and the user experience. I'm excited about
              creating responsive and efficient web-based experiences that help
              level up your brand and online presence. With a background in
              artist mangagement, e-commerce and social media marketing, my
              speciality is creating stunning web based experiences that are
              intentional, functional and profitable.
              <h4>
                I have a bachelors degree in business with a minor in marketing
                and a full stack software engineer bootcamp certification.
                Before launching my design studio in 2022, I previously worked
                for world renowned digital artist and creator Android Jones
                where I developed a strong understanding of and keen eye for
                design principles and best practices.
              </h4>
              <h4>
                I currently live in Boulder, CO where I spend the majority of my
                time. When I’m not designing or developing you can find me
                traveling , exploring the outdoors, practicing yoga, reading or
                enjoying live music.
              </h4>
            </h4>
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
