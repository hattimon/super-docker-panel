import React from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;