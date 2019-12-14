//react
import React, { Component } from 'react'
//components
import Product from '../product'
import { withApiService } from '../hoc'
import Preloader from '../preloader'
import ReactPaginate from 'react-paginate'
//redux
import { connect } from 'react-redux'
//actions
import {
	updateItemsError,
	updateItemsPending,
	updateItemsSuccess,
	updatePaginationSuccess,
	updateCurrentPage
} from '../../actions'
//router
import { withRouter } from 'react-router-dom'

class ProductsContainer extends Component {
	componentDidMount = () => {
		const { updateItemsError, updateItemsPending, updateItemsSuccess, updatePaginationSuccess, page } = this.props;
		document.title = `Страница ${page}`
		updateItemsPending();
		this.props.apiService.getProducts(page - 1)
			.then(response => {
				updateItemsSuccess(response.data.items)
				updatePaginationSuccess(response.data.pagination)
			})
			.catch(err => {
				updateItemsError(err)
			})
	}
	componentDidUpdate = (prevState) => {
		if (prevState.pagination.currentPage !== this.props.pagination.currentPage) {
			const { updateItemsError, updateItemsPending, updateItemsSuccess, updatePaginationSuccess, pagination, page } = this.props;
			document.title = `Страница ${page}`
			updateItemsPending();
			this.props.apiService.getProducts(pagination.currentPage)
				.then(response => {
					updateItemsSuccess(response.data.items)
					updatePaginationSuccess(response.data.pagination)
				})
				.catch(err => {
					updateItemsError(err)
				})
		}
	}
	render() {
		const { loading, items, pagination, updateCurrentPage, history, match} = this.props;
		const loader = (loading) ? <Preloader /> : null;
		// const displayError = (error) ? error : null;
		const products = items.map(({ id, location, saleOffer, specification, landDetails, images }) => {
			let price = 'нет цены'
			if (saleOffer) {
				price = saleOffer.multiCurrencyPrice.usd
			}
			let imgUrl = false
			if (images[0]) {
				imgUrl = `http://images.jqestate.ru/${images[0].id}-thumbnail-512`
			}
			return <Product
				key={id}
				districtName={location.districtName}
				mkadDistance={location.mkadDistance}
				id={id}
				price={price}
				specificationsArea={specification.area}
				landArea={landDetails.area}
				imgUrl={imgUrl}
			/>
		})
		return (
			<div>
				<ul className="products">
					{loader}
					{products}
				</ul>
				<ReactPaginate
					containerClassName="page-paginator"
					activeClassName="active"
					previousLabel="<"
					nextLabel=">"
					pageCount={pagination.total / 32}
					onPageChange={(page) => {
						updateCurrentPage(page.selected);
						history.push(`${page.selected + 1}`);
					}}
					initialPage={parseInt(match.params.page - 1)}
				/>
			</div>
		)
	}
}

const mapStateToProps = ({ data, pagination }) => {
	return {
		loading: data.loading,
		items: data.items,
		pagination
	}
}
const mapDispatchToProps = {
	updateItemsError,
	updateItemsPending,
	updateItemsSuccess,
	updatePaginationSuccess,
	updateCurrentPage
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withApiService(ProductsContainer)))