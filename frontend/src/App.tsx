import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Containers } from './components/Containers';
import { WifiConfig } from './components/WifiConfig';
import { SystemInfo } from './components/SystemInfo';
import { Maintenance } from './components/Maintenance';
import { Settings } from './components/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/containers" element={<Containers />} />
          <Route path="/wifi" element={<WifiConfig />} />
          <Route path="/system" element={<SystemInfo />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
