//react
import React from 'react'
//components
import {ProductsContainer} from '../containers'

const Sales = ({match}) => {
	return (
		<section className="sales">
			<ProductsContainer page={match.params.page}/>
		</section>
	)
}

export default Sales