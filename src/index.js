import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomThemeProvider from './Themes/customThemeProvider';

// default Theme is created in the deafult.js file inside themes directory 
ReactDOM.render(
	<CustomThemeProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</CustomThemeProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
