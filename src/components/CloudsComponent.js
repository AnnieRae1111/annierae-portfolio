import clouds from '../assets/Clouds.mp4';

const Clouds = () => {
  return (
    <div className="video-shape">
      <div className="quote-container ">
        <div className="quote-text">
          “This is the <span className="quote-italicize">REAL</span> secret of
          life - to be completely{' '}
          <span className="quote-italicize">ENGAGED</span> with what you are
          doing in the <span className="quote-italicize">HERE</span> and{' '}
          <span className="quote-italicize">NOW</span>. And instead of calling
          it work, realize it is <span className="quote-italicize">PLAY</span>.”{' '}
          <br />
          <span className="alan-watts">-Alan Watts</span>
        </div>
      </div>
      <video className="clouds-video" src={clouds} autoPlay loop muted />
    </div>
  );
};

export default Clouds;
