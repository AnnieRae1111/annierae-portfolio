import '../css/work.css';
import nasaApp from '../assets/in-the-stars.png';
import { Link } from 'react-router-dom';

import goodKarma from '../assets/good-karma.png';
const WorkLeft = () => {
  return (
    <div className="work-item-left container">
      {/* <h2 className="selected-work">Selected Work –––––––––</h2> */}
      <div className="image-container-left">
        <article class="scroller">
          <section class="section">
            <img class="image-left" src={goodKarma} alt="" />
          </section>
        </article>
      </div>
      <div className="text-container-left">
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
        <p className="technologies-used">
          Technologies: HTML, CSS, Javascript, React, reactStrap, react reveal ,
          Node, Express, MongoDB, Mongoose
        </p>
        <p className="work-info">
          Easily give your gently loved items to those in need.
        </p>
      </div>
    </div>
  );
};

export default WorkLeft;
