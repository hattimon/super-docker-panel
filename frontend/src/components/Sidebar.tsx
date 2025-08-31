import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-200 dark:bg-gray-800 p-4">
      <ul>
        <li><Link to="/" className="block p-2 hover:bg-gray-300 dark:hover:bg-gray-700">Dashboard</Link></li>
        <li><Link to="/containers" className="block p-2 hover:bg-gray-300 dark:hover:bg-gray-700">Dockery</Link></li>
        <li><Link to="/wifi" className="block p-2 hover:bg-gray-300 dark:hover:bg-gray-700">WiFi Config</Link></li>
        <li><Link to="/system" className="block p-2 hover:bg-gray-300 dark:hover:bg-gray-700">System Info</Link></li>
        <li><Link to="/maintenance" className="block p-2 hover:bg-gray-300 dark:hover:bg-gray-700">Maintenance</Link></li>
        <li><Link to="/settings" className="block p-2 hover:bg-gray-300 dark:hover:bg-gray-700">Ustawienia</Link></li>
      </ul>
    </div>
  );
};
