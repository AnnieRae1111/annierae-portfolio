import WorkGoodKarma from './WorkGoodKarma';
import WorkWar from './WorkWar';
import Work from './Work';
import '../css/scroller.css';
import StuffIMade from './pages/StuffIMade';

const ProjectScroller = () => {
  return (
    <>
      <div className="slider ">
        <section className="section-stuff">
          <StuffIMade />
        </section>
        <section className="section">
          <Work />
        </section>
        <section className="section">
          <WorkGoodKarma />
        </section>
        <section className="section">
          <WorkWar />
        </section>
      </div>
    </>
  );
};

export default ProjectScroller;
