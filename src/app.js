// Install -> Import -> Use
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const appRoot = document.getElementById('app');
ReactDOM.render(<App/>, appRoot);
