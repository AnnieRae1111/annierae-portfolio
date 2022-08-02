import GraphicStuffIMade from './GraphicStuffIMade';
// import clouds from '../assets/Clouds.mp4';
import '../css/graphicDesign.css';
import rosemaryRadience from '../assets/rosemary-radience-white.png';
import metazoa from '../assets/Metazoa-Book.png';
import marthabizcard from '../assets/martha-biz-card.png';
import dharmaDesigns from '../assets/dharma_designs.jpg';
import nedBizCard from '../assets/NedBizCard.png';
import AMA from '../assets/AmaFlyer.png';
import infoCard from '../assets/AJInfoCard.png';
import breathe from '../assets/BREATHE.jpg';
import jennaLogos from '../assets/Jenna Logos.jpg';

const GraphicDesign = () => {
  return (
    <>
      {/* <div className="video-shape">
        <video className="clouds-video" src={clouds} autoPlay loop muted />
        <div className="video-content">
          <p> DESIGN </p>
        </div>
      </div> */}
      <div className="gd-marquee-container">
        <h1 className="other-gd-work">
          {' '}
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design - Graphic & Web Design - Graphic & Web Design -
          Graphic & Web Design -{' '}
        </h1>
      </div>
      <section className="graphic-design-container container ">
        <div className="design-verticle">
          <GraphicStuffIMade />
        </div>
        <div className="slider  graphic-slider">
          {/* <section className="section-stuff graphic<GraphicStuffIMade />-stuff-imade">
            
          </section> */}
          <section className="gd-section">
            <div className="gd-image-container">
              <img className="gd-image" src={rosemaryRadience} alt="" />
            </div>
          </section>

          <section className="gd-section">
            <div className="gd-image-container">
              <img className="gd-image" src={marthabizcard} alt="" />
            </div>
          </section>
          <section className="gd-section">
            <div className="gd-image-container">
              <img className="gd-image" src={dharmaDesigns} alt="" />
            </div>
          </section>
          <section className="gd-section">
            <div className="gd-image-container">
              <img className="gd-image" src={metazoa} alt="" />
            </div>
          </section>
          <section className="gd-section">
            <div className="gd-image-container">
              <img className="gd-image" src={nedBizCard} alt="" />
            </div>
          </section>
          <section className="gd-section">
            <div className="gd-image-container">
              <img className="gd-image" src={AMA} alt="" />
            </div>
          </section>
          <section className="gd-section">
            <div className="gd-image-container">
              <img className="infoCard" src={infoCard} alt="" />
            </div>
          </section>
          <section className="gd-section">
            <div className="gd-image-container">
              <img className="infoCard jenna" src={jennaLogos} alt="" />
            </div>
          </section>
          <section className="gd-section">
            <div className="gd-image-container">
              <img className="infoCard breathe" src={breathe} alt="" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default GraphicDesign;
