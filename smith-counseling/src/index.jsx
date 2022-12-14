import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

const element = <App />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
