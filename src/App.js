import { Route, Routes } from 'react-router-dom';
import NavBar from './components/pages/Navbar';
import LandingPage from './components/pages/LandingPage';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Inquire from './components/pages/Inquire';
import Marquee from './components/Marquee';
import Work from './components/Work';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/inquire" element={<Inquire />} />
        </Routes>
      </main>
      <Marquee />
      <section className="work">
        <Work />
      </section>
    </div>
  );
}

export default App;
