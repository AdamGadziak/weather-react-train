import axios from 'axios';

const API_KEY = '406fa65fd7e94f9fb7849e3a9c784a52';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
	const url = `${ROOT_URL}&q=${city},pl`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}