import '../css/footer.css';

import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-input">
          Get In Touch :
          <p className="footer-text">
            I am currently open to web design and development opportunities.
            Need a refresher on your existing website? I'm currently taking new
            clients for the month of June. If you are interested in learning
            more please don't hesitate to reach out and I will get back to you
            within 24 hours! Let's make some{' '}
            <span className="magic">MAGIC</span>.{' '}
          </p>
        </div>
        <div className="footer-icons">
          {' '}
          <AiOutlineMail />
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
