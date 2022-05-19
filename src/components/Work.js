import '../css/work.css';
import nasaApp from '../assets/in-the-stars.png';

const Work = () => {
  return (
    <div className="work-item container container">
      {/* <h2 className="selected-work">Selected Work –––––––––</h2> */}
      <div className="text-container">
        <h1>It's All In The Stars</h1>
        <a className="github" href="www.github.com">
          GITHUB
        </a>
        {'      '}
        <a className="liveapp" href="www.github.com">
          LIVEAPP
        </a>
        <p className="technologies-used">
          Technologies: HTML, CSS, Javascript, React, reactStrap, Context API,
          Styled Components
        </p>
        <p className="work-info">
          Created with NASA’s APOD API. Catch a daily glimpse from outer space
          And get your daily horoscope.
        </p>
      </div>
      <div className="image-container">
        <img src={nasaApp} alt="" />
      </div>
    </div>
  );
};

export default Work;
