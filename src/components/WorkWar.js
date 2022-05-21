import '../css/work.css';
import warpng from '../assets/War.png';

import { FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';

const WorkWar = ({ Project1 }) => {
  return (
    <div className="work-item container ">
      <div className="work-text-container">
        <h1>War - Card Game</h1>
        <a
          className="github"
          href="https://github.com/AnnieRae1111/War"
          rel="noreferrer"
          target="_blank"
        >
          GITHUB
        </a>
        {'      '}
        <a
          className="liveapp"
          href="https://annierae1111.github.io/War/"
          rel="noreferrer"
          target="_blank"
        >
          LIVEAPP
        </a>
        <p className="work-icons">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJsSquare />
        </p>
        <p className="technologies-used">Technologies: HTML, CSS, Javascript</p>
        <p className="work-info">A spin on the classic card game, War.</p>
      </div>
      <div className="image-container">
        {/* <article class="scroller">
          <section class="section"> */}
        <img class="image-right" src={warpng} alt="" />
        {/* </section>
        </article> */}
      </div>
    </div>
  );
};

export default WorkWar;
