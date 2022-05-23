import clouds from '../assets/Clouds.mp4';
import '../css/graphicDesign.css';

const GraphicDesign = () => {
  return (
    <div className="graphic-design-container">
      <div className="video-shape">
        <video className="clouds-video" src={clouds} autoPlay loop muted />
      </div>
      <p>Other Selected Work: Web and Graphic Design</p>

      <div className="slider container">
        <section className="section-stuff">Item 1</section>
        <section className="section">Item 2</section>
        <section className="section">Item 3</section>
        <section className="section">Item 4</section>
      </div>
    </div>
  );
};

export default GraphicDesign;
