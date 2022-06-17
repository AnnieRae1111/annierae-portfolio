import '../css/footer.css';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-input container">
          Get In Touch :
          <p className="footer-text">
            I am currently open to web design and development opportunities or
            collaborations. If you are interested in learning more or think we
            would be a good fit please don't hesitate to reach out and I will
            get back to you within 48 hours. Let's make some{' '}
            <span className="magic">MAGIC</span>.{' '}
          </p>
        </div>
        <div className="footer-icons">
          {' '}
          <a
            className="footer-link"
            href="mailto:annirae.elizabeth@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            {' '}
            <AiOutlineMail />{' '}
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/annierae-cioccolanti/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="footer-link"
            href="https://github.com/AnnieRae1111"
            rel="noreferrer"
            target="_blank"
          >
            {' '}
            <AiFillGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
