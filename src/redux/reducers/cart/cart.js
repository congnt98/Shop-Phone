import { ADDTOCART, DELETECART, SETQTY, CALLAPI_LIST_CART } from "../../constants/actionTypes"
// var data = JSON.parse(localStorage.getItem('cart'))
var initState = []

const cart = (state = initState, action) => {
    var { product, qty, id } = action
    switch (action.type) {
        case CALLAPI_LIST_CART:
            state = action.listcart
            return [...state]
        case ADDTOCART:
            var cart = {
                product,
                qty
            };
            var findCart = state.find(x => x.product.id === cart.product.id)
            if (findCart) {
                return [...state]
            } else {
                return [...state, cart]
            }
        case SETQTY:
            // console.log(id, qty);
            let resuft = state.find(x => x.id === id)
            if (qty > 0) {
                resuft.qty = qty
            } else {
                resuft.qty = 1
            }
            return [...state]
        case DELETECART:
            state = state.filter(x => x.id !== id)
            return [...state]
        default:
            return state
    }
}
export default cart