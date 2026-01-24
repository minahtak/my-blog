import './polyfills'; // [중요] 무조건 최상단 1번째 줄에 있어야 합니다!
// (import 문들 사이에서도 가장 위에 있어야 App보다 먼저 실행됩니다)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);