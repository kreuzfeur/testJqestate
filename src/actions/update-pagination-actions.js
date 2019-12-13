const updatePaginationSuccess = (pagination) => {
	return {
		type: 'UPDATE_PAGINATION_SUCCESS',
		payload: pagination
	}
	
}
const updateCurrentPage = (page) => {
	return{
		type: "UPDATE_CURRENT_PAGE",
		payload: page
	}
}
export {
	updatePaginationSuccess,
	updateCurrentPage
}