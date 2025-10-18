import { IoArrowForwardOutline } from 'react-icons/io5';

const StuffIMade = () => {
  return (
    <div className="work-item-continer stuff container">
      <h1 className="web-dev-things ">
        Design & Development
        <br />
        {/* <span className="scroll">(scroll)</span> <br /> */}
        <span className="this-way">(scroll)</span>
        <IoArrowForwardOutline className="arrow" />
      </h1>
    </div>
  );
};

export default StuffIMade;
