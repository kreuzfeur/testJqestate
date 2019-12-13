const updateItemsPending = () => {
	return {
		type: 'UPDATE_ITEMS_PENDING'
	}
}
const updateItemsSuccess = (items) => {
	return {
		type: 'UPDATE_ITEMS_SUCCESS',
		payload: items
	}
}
const updateItemsError = (error) => {
	return {
		type: 'UPDATE_ITEMS_Error',
		payload: error
	}
}

export {
	updateItemsError,
	updateItemsPending,
	updateItemsSuccess
}