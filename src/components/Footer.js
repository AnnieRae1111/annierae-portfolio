import '../css/footer.css';

import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-input">Get in Touch:</div>
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
