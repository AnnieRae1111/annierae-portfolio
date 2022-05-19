import '../css/marquee.css';

const Marquee = () => {
  return (
    <div className="wavy-path">
      <svg
        version="1.1"
        className="wavy-svg-two"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1581.73 208"
        xmlSpace="preserve"
      >
        <style type="text/css"></style>
        <g>
          <path
            className="path-bg"
            id="path-bg-two"
            d="M1581.73,208c-93.24,0-141.1-38.73-183.33-72.91-38-30.78-68.08-55.09-133-55.09s-95,24.31-133,55.09C1090.15,169.27,1042.29,208,949,208s-141.1-38.73-183.33-72.91c-38-30.78-68.08-55.09-133-55.09s-95,24.31-133,55.09C457.46,169.27,409.59,208,316.35,208S175.24,169.27,133,135.09C95,104.31,64.93,80,0,80V0C93.24,0,141.11,38.73,183.34,72.91c38,30.78,68.08,55.09,133,55.09s95-24.31,133-55.09C491.59,38.73,539.45,0,632.7,0S773.8,38.73,816,72.91c38,30.78,68.08,55.09,133,55.09s95-24.31,133-55.09C1124.28,38.73,1172.14,0,1265.39,0s141.1,38.73,183.33,72.91c38,30.78,68.08,55.09,133,55.09Z"
          />
        </g>
        <path
          id="path-text-two"
          className="path-text"
          d="M0,40c158.17,0,158.17,128,316.35,128S474.52,40,632.69,40,790.86,168,949,168,1107.21,40,1265.38,40s158.18,128,316.35,128"
        />
        <text className="style" width="100%">
          <textPath
            className="text-path"
            alignmentBaseline="top"
            xlinkHref="#path-text-two"
            startOffset="-3200"
            id="path-text-two-letters"
          >
            <tspan id="path-span-two">
              Let's Create Something Together - Let's Create Something Together
              - Let's Create Something Together - Let's Create Something
              Together - Let's Create Something Together - Let's Create
              Something Together - Let's Create Something Together - Let's
              Create Something Together - Let's Create Something Together -
              Let's Create Something Together - Let's Create Something Together
              - Let's Create Something Together - Let's Create Something
              Together - Let's Create Something Together - Let's Create
              Something Together -{' '}
            </tspan>
            <animate
              attributeName="startOffset"
              from="-3200"
              to="0"
              begin="-1s"
              dur="80s"
              repeatCount="indefinite"
            ></animate>
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Marquee;
