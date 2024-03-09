import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { getTodaysSeed } from './utils/utils';

// check if our local storage is out of date, and update it if so
const todaysSeed = getTodaysSeed();
const seed = JSON.parse(window.localStorage.getItem("wordhuntle-seed"));

if (seed !== todaysSeed) {
	if (seed === todaysSeed - 1) {
		const foundWords = localStorage.getItem("wordhuntle-foundWords");
		window.localStorage.setItem("wordhuntle-yesterdaysFoundWords", foundWords);
	} else {
		window.localStorage.removeItem("wordhuntle-yesterdaysFoundWords");
	}
	window.localStorage.setItem("wordhuntle-seed", JSON.stringify(todaysSeed));
	window.localStorage.removeItem("wordhuntle-foundWords");
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);