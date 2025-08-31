import React from 'react';
import { Sidebar } from './Sidebar';

export const Settings: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4">Ustawienia - W budowie (zmiana hasła).</div>
    </div>
  );
};
