import React from 'react';
import { Sidebar } from './Sidebar';

export const WifiConfig: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4">Konfiguracja WiFi - W budowie (użyj nmcli w backend).</div>
    </div>
  );
};
