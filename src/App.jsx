import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/HomePage';
import AllMissionsPage from './pages/AllMissionsPage';
import MissionFormPage from "./pages/MissionFormPage";
import MissionMap from './pages/MapViewPage';

function App() {
  return (
    <Router>
      <div className="bg-[#151414] text-white min-h-screen">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<AllMissionsPage />} />
          <Route path="/new-mission" element={<MissionFormPage />} />
          <Route path="/map-view" element={<MissionMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;