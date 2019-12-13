//react
import React from 'react'
//styles
import './product.scss'
import noImage from '../../img/no-image.png'

const Product = ({ id, districtName, mkadDistance, price, specificationsArea, landArea, imgUrl }) => {
	return (

		<li className="product">
			<img src={imgUrl || noImage} alt="" className="product-image"  onError={(e)=>{e.target.onerror = null; e.target.src='http://catoca.com/ru/wp-content/themes/images/no-image-found-360x260.png'}}/>
			<h2 className="product-description">Дом в поселке "{districtName}", {mkadDistance}км, ID {id}</h2>
			<span className="product-price">${price}</span>
			<div className="product-areas">
				<span className="product-land-area">{landArea} сот</span>
				<span className="product-specification-area">{specificationsArea} м</span>
			</div>
		</li>

	)
}

export default Product