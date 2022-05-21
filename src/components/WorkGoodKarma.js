import '../css/work.css';
import goodkarmapng from '../assets/good-karma.png';

import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa';

import { SiMongodb, SiExpress } from 'react-icons/si';

const WorkGoodKarma = () => {
  return (
    <div className="work-item container ">
      <div className="work-text-container">
        <h1>Good Karma</h1>
        <a
          className="github"
          href="https://github.com/AnnieRae1111/Giveback-app-front-end"
          rel="noreferrer"
          target="_blank"
        >
          GITHUB
        </a>
        {'      '}
        <a
          className="liveapp"
          href="https://goodkarma-app.herokuapp.com/signin"
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
          <FaNodeJs />
          <SiExpress />
          <SiMongodb />
        </p>

        <p className="technologies-used">
          Technologies: HTML, CSS, Javascript, React, reactStrap, react reveal ,
          Node, Express, MongoDB, Mongoose
        </p>
        <p className="work-info">
          Easily give your gently loved items to those in need.
        </p>
      </div>
      <div className="image-container">
        {/* <article class="scroller">
          <section class="section"> */}
        <img class="image-right" src={goodkarmapng} alt="" />
        {/* </section>
        </article> */}
      </div>
    </div>
  );
};

export default WorkGoodKarma;
