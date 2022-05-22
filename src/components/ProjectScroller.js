import WorkGoodKarma from './WorkGoodKarma';
import WorkWar from './WorkWar';
import Work from './Work';
import '../css/scroller.css';

const ProjectScroller = () => {
  return (
    <div className="slider">
      <section className="section">
        <Work />
      </section>
      <section className="media-element">
        <WorkGoodKarma />
      </section>
      <section className="media-element">
        <WorkWar />
      </section>
    </div>
  );
};

export default ProjectScroller;
