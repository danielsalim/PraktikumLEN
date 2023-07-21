import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const mountRemoteComponent = async () => {
      const { mount } = await import('remote-app/RemoteComponent');
      mount(document.getElementById('remote-container'));
    };
    mountRemoteComponent();
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2>Microfrontend Host</h2>
      <div id="remote-container"></div>
    </div>
  );
};

export default App;
