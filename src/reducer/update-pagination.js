const updatePagination = (state, action) => {
	if (state === undefined) {
		return {
			total: 0,
			limit: null,
			offset: null,
			currentPage: 0
		}
	}
	switch (action.type) {
		case 'UPDATE_PAGINATION_SUCCESS':
			return {
				...state.pagination,
				...action.payload
			}
		case 'UPDATE_CURRENT_PAGE':
			return {
				...state.pagination,
				currentPage: action.payload
			}
		default:
			return state.pagination
	}
}

export default updatePagination