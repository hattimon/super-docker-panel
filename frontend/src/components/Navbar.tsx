import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between">
        <h1 className="text-xl">SUPER DOCKER PANEL (SDP)</h1>
        <button onClick={toggleTheme} className="p-2 rounded bg-gray-700 hover:bg-gray-600">
          Przełącz na {theme === 'light' ? 'Ciemny' : 'Jasny'} tryb
        </button>
      </div>
    </nav>
  );
};