import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// global classes and variables
import './styles/app.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('appContainer'),
  )
});
