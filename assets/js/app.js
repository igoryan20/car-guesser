import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App';
import '../css/app.css';
import './fonts';

window.React = React;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);