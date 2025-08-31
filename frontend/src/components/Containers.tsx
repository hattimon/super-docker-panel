import React, { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { getContainers } from '../services/api';

export const Containers: React.FC = () => {
  const [containers, setContainers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      getContainers(token).then(data => setContainers(data.containers));
    }
  }, [token]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4">
        <h2>Kontenery</h2>
        <ul>
          {containers.map(c => (
            <li key={c.id}>{c.name} - Status: {c.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
