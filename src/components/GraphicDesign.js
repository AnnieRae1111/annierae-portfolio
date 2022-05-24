import GraphicStuffIMade from './GraphicStuffIMade';
import clouds from '../assets/Clouds.mp4';
import '../css/graphicDesign.css';
import rosemaryRadience from '../assets/rosemary-radiance-use.png';
import metazoa from '../assets/Metazoa-Book.png';
import marthabizcard from '../assets/martha-biz-card.png';
import dharmaDesigns from '../assets/dharma_designs.jpg';
const GraphicDesign = () => {
  return (
    <>
      <div className="video-shape">
        <video className="clouds-video" src={clouds} autoPlay loop muted />
        <div className="video-content">
          <p> DESIGN </p>
        </div>
      </div>
      <section className="graphic-design-container  ">
        {/* <p>Other Selected Work: Web and Graphic Design</p> */}
        {/* <div className="design-container container">
          <div className="gd-image-container">
            <img className="gd-image" src={rosemaryRadience} alt="" />
          </div>
          <div className="gd-text-container">
            <h3 className="gd-title">Item 1</h3>
          </div>
        </div> */}

        <div className="slider  graphic-slider">
          <section className="section-stuff graphic-stuff-imade">
            <GraphicStuffIMade />
          </section>
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
        </div>
      </section>
    </>
  );
};

export default GraphicDesign;
