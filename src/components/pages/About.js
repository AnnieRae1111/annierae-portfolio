import '../../css/about.css';
const About = () => {
  return (
    <>
      <h1 className="about-header text-center container">More About Me :</h1>
      <h4 className="about-text container">
        {/* {' '}
        I'm a detail-oriented full stack software engineer with a passion for
        frontend design and the user experience. I'm a motivated self-starter
        excited about creating responsive and efficient web-based experiences.
        I'm skilled in creative problem solving while collaborating and
        communicating with compassion and empathy. I'm a strong believer in the
        importance of learning and forever having a growth mindset. I'm a
        patient problem solver with the ability to multi-task and deliver in
        high pressure, chaotic environments. I have a professional background in
        artist management, graphic design and social media marketing, developing
        grit, flexibility and a dedicated work ethic.{' '} */}{' '}
        Compassionate and detail-oriented full stack software engineer with a
        proven track record of working on professional teams. Motivated and
        curious self-starter excited about creating responsive and efficient
        web-based products that make an impact. A passion for frontend design,
        development and the user experience. A strong believer in the importance
        of learning and forever having a growth mindset. Patient problem solver
        with the ability to multi-task and deliver in high pressure, chaotic
        environments. A professional background in software development, artist
        management, graphic design and marketing, developing grit, flexibility
        and a dedicated work ethic.{' '}
      </h4>
      <div className="about-section">
        <div className="section-divider">
          <div className="frontend">
            <h2 className="front-title">Frontend Development </h2>
            <ul className="front-end-list">
              <li className="skills-items-two">• HTML</li>
              <li className="skills-items-two">• CSS</li>
              <li className="skills-items-two">• Bootstrap</li>
              <li className="skills-items-two">• Tailwind CSS</li>
              <li className="skills-items-two">• JavaScript</li>
              <li className="skills-items-two">• React</li>
              {/* <li className="skills-items-two">• UX/UI </li>
              <li className="skills-items-two"> • Graphic Design</li> */}
            </ul>
          </div>
          <div className="frontend">
            <h2 className="front-title">Backend Development</h2>
            <ul className="front-end-list">
              <li className="skills-items-two">• Node JS</li>
              <li className="skills-items-two">• Express JS</li>
              <li className="skills-items-two">• MongoDB</li>
              <li className="skills-items-two">• Python</li>
              <li className="skills-items-two">• Django</li>
              <li className="skills-items-two">• SQL</li>
              <li className="skills-items-two">• C#</li>
              <li className="skills-items-two">• SSRS</li>
            </ul>
          </div>

          <div className="backend">
            <h2 className="back-title">Other Relevant Skills </h2>
            <ul className="back-end-list">
              <li className="skills-items">• .NET</li>
              <li className="skills-items">• OOP</li>
              <li className="skills-items">• HR Payroll & HCM</li>
              <li className="skills-items">• UX/UI</li>
              <li className="skills-items">• Graphic Design</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
