import React from 'react';
import { Sidebar } from './Sidebar';

export const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4">Witaj w SUPER DOCKER PANEL! Wybierz sekcję z menu.</div>
    </div>
  );
};
