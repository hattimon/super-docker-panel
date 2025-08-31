import React, { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { getSystem } from '../services/api';

export const SystemInfo: React.FC = () => {
  const [system, setSystem] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      getSystem(token).then(data => setSystem(data));
    }
  }, [token]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4">
        <h2>Informacje systemowe</h2>
        <pre>{JSON.stringify(system, null, 2)}</pre>
      </div>
    </div>
  );
};
