import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import {robots} from './robots';

ReactDOM.render(<App robots={robots} />, document.getElementById('root'));
    registerServiceWorker();