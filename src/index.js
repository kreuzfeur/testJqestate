//react
import React from 'react'
import ReactDOM from 'react-dom'
//components
import App from './components/app'
import { ApiServiceProvider } from './components/api-service-context'
//redux
import { Provider } from 'react-redux'
import store from './store'
//router
import { BrowserRouter as Router } from 'react-router-dom'
//styles
import './index.scss'
//services
import ApiService from './services/api-service'

const apiService = new ApiService()
ReactDOM.render(
	<Provider store={store}>
		<ApiServiceProvider value={apiService}>
			<Router>
				<App />
			</Router>
		</ApiServiceProvider>
	</Provider>
	,
	document.getElementById('root')
)