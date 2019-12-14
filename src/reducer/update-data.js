const updateData = (state, action) => {
	if (state === undefined) {
		return {
			loading: true,
			items: [],
			error: false
		}
	}
	switch (action.type) {
		case 'UPDATE_ITEMS_PENDING':
			return {
				...state.data,
				loading: true,
			}
		case 'UPDATE_ITEMS_SUCCESS':
			return {
				...state.data,
				loading: false,
				items: action.payload	
			}
		case 'UPDATE_ITEMS_ERROR':
			return {
				...state.data,
				loading: false,
				error: action.payload
			}
		default:
			return state.data
	}
}

export default updateData;