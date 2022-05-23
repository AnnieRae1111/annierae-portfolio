import clouds from '../assets/Clouds.mp4';
import '../css/graphicDesign.css';
import rosemaryRadience from '../assets/rosemary-radiance.png';

const GraphicDesign = () => {
  return (
    <>
      <div className="video-shape">
        <video className="clouds-video" src={clouds} autoPlay loop muted />
      </div>
      <section className="graphic-design-container container ">
        <p>Other Selected Work: Web and Graphic Design</p>
        {/* <div className="design-container container">
          <div className="gd-image-container">
            <img className="gd-image" src={rosemaryRadience} alt="" />
          </div>
          <div className="gd-text-container">
            <h3 className="gd-title">Item 1</h3>
          </div>
        </div> */}

        <div className="slider container">
          <section className="section-stuff">
            <div className="design-container container">
              <div className="gd-image-container">
                <img className="gd-image" src={rosemaryRadience} alt="" />
              </div>
              <div className="gd-text-container">
                <h3 className="gd-title">Item 1</h3>
              </div>
            </div>
          </section>
          <section className="section">Item 2</section>
          <section className="section">Item 3</section>
          <section className="section">Item 4</section>
        </div>
      </section>
    </>
  );
};

export default GraphicDesign;
