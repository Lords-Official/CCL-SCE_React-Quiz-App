import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import QuizApp from './QuizApp';
import './index.css';

/* This code is creating a root React component using `ReactDOM.createRoot` and rendering the `Quiz` component inside it. The `React.StrictMode` component is used to enable strict mode for the `Quiz` component, which helps catch potential issues and warnings during development. */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
