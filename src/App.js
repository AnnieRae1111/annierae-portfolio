import { Route, Routes } from 'react-router-dom';
import NavbarResponsive from './components/pages/NavbarResponsive';
import LandingPage from './components/pages/LandingPage';
import About from './components/pages/About';
// import Services from './components/pages/Services';
// import Portfolio from './components/pages/Portfolio';
// import Inquire from './components/pages/Inquire';
// import Marquee from './components/Marquee';
// import Work from './components/Work';
// import WorkGoodKarma from './components/WorkGoodKarma';
// import WorkWar from './components/WorkWar';
import './css/App.css';
import ProjectScroller from './components/ProjectScroller';
import GraphicDesign from './components/GraphicDesign';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import clouds from './assets/Clouds.mp4';
import AboutTwo from './components/pages/About2';
// import Clouds from './components/CloudsComponent';
import ProjectCarousel from './components/ProjectCarousel';

function App() {
  return (
    <div className="app-container">
      {/* <NavBar /> */}
      <NavbarResponsive />
      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                {/* <div className="section-break">
                  Web Development
                  <video
                    className="section-break-clouds"
                    src={clouds}
                    autoPlay
                    loop
                    muted
                  /> *
                </div> */}
                {/* <Work />
                <WorkGoodKarma />
                <WorkWar /> */}
                <section className="skills-section">
                  <About />
                </section>
                <div className="project-scroller">
                  <ProjectScroller />
                </div>
                <div className="project-carousel">
                  <ProjectCarousel />
                </div>
                {/* <Clouds /> */}
                <section className="graphic-design-section">
                  <GraphicDesign />
                </section>
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutTwo />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route
            path="/portfolio"
            element={
              <>
                <ProjectScroller />
                <section className="gd-portfolio">
                  <GraphicDesign />
                </section>
              </>
            }
          />
          {/* <Route path="/inquire" element={<Inquire />} /> */}
        </Routes>
      </main>
      {/* <Clouds /> */}
      <Footer />
    </div>
  );
}

export default App;
