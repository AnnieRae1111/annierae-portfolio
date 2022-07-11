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
      {/* <video className="clouds-video" src={clouds} autoPlay loop muted /> */}
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="clouds-video"
      >
        <source src={clouds} type="video/mp4" />
      </video>
      {/* <div className="clouds-video">
        <div
          dangerouslySetInnerHTML={{
            __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline>
      <source src=${clouds} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}
        />
      </div> */}
    </div>
  );
};

export default Clouds;
