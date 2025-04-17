import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ make sure App is imported
import './index.css';    // ✅ optional global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* ✅ this renders your app */}
  </React.StrictMode>
);
