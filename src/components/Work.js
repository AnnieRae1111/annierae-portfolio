import '../css/work.css';
import nasaApp from '../assets/in-the-stars.png';
import inTheStars from '../assets/in-the-stars-with-stars.png';
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaBootstrap,
} from 'react-icons/fa';

const Work = ({ Project1 }) => {
  return (
    <div className="work-item container ">
      <div className="work-text-container">
        <h1>It's All In The Stars</h1>
        <a
          className="github"
          href="https://github.com/AnnieRae1111/It-s-All-in-the-Stars-"
          rel="noreferrer"
          target="_blank"
        >
          GITHUB
        </a>
        {'      '}
        <a
          className="liveapp"
          href="https://its-all-in-the-stars.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          LIVEAPP
        </a>
        <p className="work-icons">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJsSquare />
          <FaReact />
          <FaBootstrap />
        </p>
        <p className="technologies-used">
          Technologies: HTML, CSS, Javascript, React, reactStrap, Context API,
          Styled Components.
        </p>
        <p className="work-info">
          Created with NASA’s APOD API. Catch a daily glimpse from outer space
          And get your daily horoscope.
        </p>
      </div>
      <div className="image-container">
        {/* <article class="scroller">
          <section class="section"> */}
        <img class="image-right" src={inTheStars} alt="" />
        {/* </section>
        </article> */}
      </div>
    </div>
  );
};

Work.defaultProps = {
  Project1: {
    title: "It's All in the Stars",
    technologies:
      'Technologies: HTML, CSS, JavaScript, React, reactStrap, Context API, Styled Components ',
    info: "Created with NASA's APOD API. Catch a daily glimpse from outspace and read your horoscope.",
    github: 'https://github.com/AnnieRae1111/It-s-All-in-the-Stars-',
    liveApp: 'https://its-all-in-the-stars.netlify.app/',
  },
  Project2: {
    title: 'Good Karma',
    technologies:
      'HTML, CSS, JavaScript, React, reactStrap, React Reveal, Node, Express, MongoDB, Mongoose',
    info: 'Easily give your gently loved items to those in need',
    github: 'https://github.com/AnnieRae1111/Giveback-app-front-end',
    liveApp: 'https://goodkarma-app.herokuapp.com/signin',
  },
};

export default Work;
