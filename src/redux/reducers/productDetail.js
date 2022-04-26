import { DETAILPRODUCT } from "../constants/actionTypes"

var initState = ''
const detailproduct = (state = initState, action) => {
    switch (action.type) {
        case DETAILPRODUCT:
            return action.item
        default:
            return state
    }
}
export default detailproduct