// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { stopReportingRuntimeErrors } from "react-error-overlay";
import { BrowserRouter } from 'react-router-dom';
// // import App from './App';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
			<App />
		</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
