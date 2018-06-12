import React from 'react';
import ReactDOM from 'react-dom';
import CommApp from './CommApp';
import './index.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommApp />, document.getElementById('root'));
registerServiceWorker();
