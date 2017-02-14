/*
//if (process.env.NODE_ENV !== 'production') {
require('./index.html')
//}

require('./index.scss');

require('bootstrap-sass');

require('./main');
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';

let rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
