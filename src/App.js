import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './components/About';
import Inquire from './components/Inquire';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import LandingPage from './components/LandingPage';
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
    </div>
  );
}

export default App;
