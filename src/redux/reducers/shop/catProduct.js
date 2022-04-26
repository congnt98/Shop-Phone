import { SHOWCATPRODUCT } from "../../constants/actionTypes"

var initState = ''
const catproduct = (state = initState, action) => {
    switch (action.type) {
        case SHOWCATPRODUCT:
            return action.catname
        default:
            return state
    }
}
export default catproduct