import { Route, Routes } from 'react-router-dom';
import NavBar from './components/pages/Navbar';
import NavbarResponsive from './components/pages/NavbarResponsive';
import LandingPage from './components/pages/LandingPage';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Inquire from './components/pages/Inquire';
import Marquee from './components/Marquee';
import Work from './components/Work';
import WorkGoodKarma from './components/WorkGoodKarma';
import WorkWar from './components/WorkWar';
import './css/App.css';
import ProjectScroller from './components/ProjectScroller';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <div className="marquee-section">
                  <Marquee />
                </div>
                <ProjectScroller />
                {/* <Work />
                <WorkGoodKarma />
                <WorkWar /> */}
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/inquire" element={<Inquire />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
