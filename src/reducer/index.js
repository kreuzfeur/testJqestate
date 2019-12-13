import updateData from './update-data'
import updatePagination from './update-pagination'

const reducer = (state, action) => {
	return {
		data: updateData(state, action),
		pagination: updatePagination(state, action),
	}
}

export default reducer;