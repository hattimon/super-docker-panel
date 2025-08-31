import React from 'react';
import { Sidebar } from './Sidebar';

export const Maintenance: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4">Maintenance - W budowie (użyj docker system prune).</div>
    </div>
  );
};
