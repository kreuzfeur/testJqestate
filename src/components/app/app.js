//react
import React from 'react'
//styles
import './app.scss'
//components
import { Sales } from '../pages'
//router
import { Route, Link, Switch } from 'react-router-dom'

const App = () => {
	return (
		<section className="app">
			<Switch>
				<Route render={() => <Link to='/sales' className="button">Продажа</Link>} path='/' exact/>
				<Route component={Sales} path='/sales'/>
			</Switch>
		</section>
	)
}

export default App;