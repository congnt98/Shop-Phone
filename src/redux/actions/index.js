import { SHOWPRODUCT, SHOWCATPRODUCT, ADDTOCART, SETQTY, DELETECART, DETAILPRODUCT, CALLAPI_LIST_CART } from '../constants/actionTypes'
import Callapi from '../../api/callApi'

//CALL API

export const callapiGetListProduct = () => {
    return (dispatch) => {
        return Callapi('products', 'GET', null)
            .then(res => {
                dispatch(setstateproduct(res.data))
            })
    }
}
export const callapiGetListCart = () => {
    return (dispatch) => {
        return Callapi('cart', 'GET', null)
            .then(res => {
                dispatch(setStateCart(res.data))
            })
    }
}
export const callapiPostProduct = (data) => {
    return (dispatch) => {
        return Callapi('cart', 'POST', data)
            .then(res => {
                dispatch(addtocart(res.data.product, res.data.qty))
            })
    }
}
export const callapiPutProduct = (data, id) => {
    return (dispatch) => {
        return Callapi(`cart/${id + 1}`, 'Put', data)
            .then(res => {
                dispatch(addtocart(res.data.product, res.data.qty))
            })
    }
}
export const apisetqty = (id, data) => {
    return (dispatch) => {
        return Callapi(`cart/${id}`, 'Put', data)
            .then(res => {
                dispatch(setqty(res.data.id, res.data.qty))
            })
    }
}
export const apideletecart = (id) => {
    return (dispatch) => {
        return Callapi(`cart/${id}`, 'DELETE',)
            .then(res => {
                dispatch(deletecart(res.data.id))
            })
    }
}


export const setStateCart = (listcart) => {
    return {
        type: CALLAPI_LIST_CART,
        listcart
    }
}

export const setstateproduct = (listproduct) => {
    return {
        type: SHOWPRODUCT,
        listproduct
    }
}
export const showCatproduct = (catname) => {
    return {
        type: SHOWCATPRODUCT
        , catname
    }
}
export const addtocart = (product, qty) => {
    return {
        type: ADDTOCART
        , product, qty
    }
}

export const setqty = (id, qty) => {
    return {
        type: SETQTY
        , id, qty
    }
}
export const deletecart = (id) => {
    return {
        type: DELETECART,
        id
    }
}
export const detailproduct = (item) => {
    return {
        type: DETAILPRODUCT,
        item
    }
}

