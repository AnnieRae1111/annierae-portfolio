import '../css/work.css';
import nasaApp from '../assets/in-the-stars.png';
// import nasaScroll from '../assets/nasascroll.png';
// import screenCapture from '../assets/in-stars-screen-capture.png';
import nasaScrollEdited from '../assets/nasascrolledited.png';

const Work = () => {
  return (
    <div className="work-item container container">
      {/* <h2 className="selected-work">Selected Work –––––––––</h2> */}
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
        <article class="scroller">
          <section class="section">
            <img class="image-right" src={nasaApp} alt="" />
          </section>
        </article>
      </div>
    </div>
  );
};

export default Work;
