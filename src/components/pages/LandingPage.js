import '../../css/LandingPage.css';
import Marquee from '../Marquee';
// import { IoMdArrowDown } from 'react-icons/io';
const LandingPage = () => {
  return (
    <div className="landing-main-container">
      <a href="mailto:annierae.elizabeth@gmail.com" className="email">
        {' '}
        –––––––––––––{' '}
        <span className="email-span">annierae.elizabeth@gmail.com</span>
      </a>
      <section className="landing-page-container container">
        <div className="star-container">
          <svg
            className="stars"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="157"
            height="140"
            viewBox="0 0 157 140"
          >
            <defs>
              <clipPath id="clipPath">
                <rect
                  id="Rectangle_2"
                  data-name="Rectangle 2"
                  width="103"
                  height="103"
                  fill="none"
                />
              </clipPath>
              <clipPath id="clipPath-2">
                <rect
                  id="Rectangle_2-2"
                  data-name="Rectangle 2"
                  width="77"
                  height="77"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Component_1_17"
              data-name="Component 1 – 17"
              transform="translate(54 37)"
            >
              <g id="Group_1" data-name="Group 1" clipPath="url(#clipPath)">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M103,51.5C57.223,54.66,54.66,57.222,51.5,103,48.34,57.222,45.777,54.66,0,51.5,45.777,48.34,48.34,45.777,51.5,0c3.16,45.777,5.723,48.34,51.5,51.5"
                />
              </g>
            </g>
            <g id="Component_1_18" data-name="Component 1 – 18">
              <g id="Group_1-2" data-name="Group 1" clipPath="url(#clipPath-2)">
                <path
                  id="Path_1-2"
                  data-name="Path 1"
                  d="M77,38.5C42.778,40.863,40.863,42.777,38.5,77,36.137,42.777,34.222,40.863,0,38.5,34.222,36.137,36.137,34.222,38.5,0,40.863,34.222,42.778,36.137,77,38.5"
                />
              </g>
            </g>
          </svg>
          <div className="heading-container">
            <div className="text-container">
              <p className="my-name-is"> Hi, my name is</p>
              <h2 className="heading">AnnieRae</h2>
              <p className="tagline">I create things for the digital realms.</p>
              <p className="landing-info">
                I'm a creative web developer with a passion for design and the
                user experience. I am excited about creating optimized,
                effecient and unique web-based experiences that provide
                solutions to amplify your online presence.
              </p>
              {/* <IoMdArrowDown className="scroll-down" /> */}
              {/* <Link to="/services">
                <button className="landing-button"> Learn More</button>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="marquee-section">
          <Marquee />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
