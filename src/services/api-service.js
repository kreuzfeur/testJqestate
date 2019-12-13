import axios from 'axios'
axios.defaults.baseURL = 'https://api.jqestate.ru/v1/properties/';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default class ApiService {
	getProducts = (page) => {
		const offset = page*32;
		return axios({
			method: 'GET',
			url: `country?pagination[offset]=${offset}`
		})
	}
}