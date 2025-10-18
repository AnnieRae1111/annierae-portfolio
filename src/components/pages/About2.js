import '../../css/about2.css';
import '../../css/about.css';
import me from '../../assets/annierae-profile-photo.jpeg';
import me2 from '../../assets/profilephoto.png';
const AboutTwo = () => {
  return (
    <>
      {/* <h1 className="about-header-two text-center container">
        More About Me :
      </h1>{' '} */}
      <div className="about-two-container container">
        <div className="about-image-container">
          <img className="about-two-image" src={me2} alt="" />
        </div>
        <div className="about-text-two">
          <div className="text-container-2">
            <span className="hello-world-desktop">Hi there,</span>
            <span className="hello-world">Hi there,</span>
            <p className="about-two-h4">
              {/* <span className="hello-world">Hello World,</span> */}
              <br />
              I’m a full stack software engineer with a unique career
              path—starting in creative brand management and evolving into
              security-focused software development. After leading global
              digital campaigns and managing e-commerce platforms, I
              transitioned into tech through an immersive 420+ hour bootcamp and
              haven’t looked back. Today, I specialize in building scalable
              authentication systems, cloud-native APIs, and high-reliability
              backend services. My current role at Paycor places me on a
              fast-moving security team, where I’ve designed authentication
              flows, migrated sensitive data to Azure, improved fraud detection,
              and supported mission-critical deployments using CI/CD pipelines
              and observability tools like Application Insights. I bring both
              creative agility and technical discipline. During my time at
              Sentric HR, I developed features using C# and JavaScript,
              collaborated with QA and Product, and built reports using SSRS and
              SQL Server. My earlier experience managing a digital artist’s
              brand taught me how to lead projects, scale systems, and stay
              adaptable—skills I now apply to software delivery and DevOps
              practices. I thrive in collaborative environments where solving
              hard problems is part of the culture. Whether I’m writing
              test-driven code, improving database performance, or strengthening
              authentication protocols, I’m driven to make systems stronger,
              smarter, and safer.
              <br />
              {/* </p> */}
            </p>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="section-divider">
          <div className="frontend-two">
            <div className="title-container">
              <h2 className="front-title-two">Frontend Development</h2>
            </div>
            <ul className="front-end-list-two">
              <li className="skills-items-two">HTML</li>
              <li className="skills-items-two">CSS</li>
              <li className="skills-items-two">JavaScript</li>
              <li className="skills-items-two">React</li>
              <li className="skills-items-two">TypeScript</li>
              <li className="skills-items-two">Angular</li>
              <li className="skills-items-two">Angular</li>
              <li className="skills-items-two">Figma</li>
              <li className="skills-items-two">Photoshop</li>
              <li className="skills-items-two">Illustrator</li>
              <li className="skills-items-two">Responsive Design</li>
            </ul>
          </div>
          <div className="backend-two">
            <div className="title-container">
              <h2 className="back-title-two">Backend Development</h2>
            </div>
            <ul className="back-end-list-two">
              <li className="skills-items-two">#C</li>
              <li className="skills-items-two">.NET</li>
              <li className="skills-items-two">Microsoft Azure</li>
              <li className="skills-items-two">Scalable APIs</li>
              <li className="skills-items-two">SQL</li>
              <li className="skills-items-two">Azuare Storage</li>
              <li className="skills-items-two">Cosmos DB</li>
              <li className="skills-items-two">Snowflake</li>
              <li className="skills-items-two">OAuth/OIDC</li>
              <li className="skills-items-two">CI/CD</li>
              <li className="skills-items-two">Azure Functions</li>
              <li className="skills-items-two">Test Driven Development</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
