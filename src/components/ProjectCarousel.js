import { useState } from 'react';

import WorkGoodKarma from './WorkGoodKarma';
import WorkWar from './WorkWar';
import Work from './Work';
import '../css/scroller.css';
import '../css/carousel.css';
import StuffIMade from './pages/StuffIMade';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const items = [
  // {
  //   component: <StuffIMade />,
  // },
  {
    component: <Work />,
  },
  {
    component: <WorkGoodKarma />,
  },
  {
    component: <WorkWar />,
  },
];

const ProjectCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = items.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(items) || items.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
      {items.map((item, index) => {
        return (
          <section
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className="carousel-section">{item.component}</div>
            )}
          </section>
        );
      })}
    </section>
  );
};

export default ProjectCarousel;
