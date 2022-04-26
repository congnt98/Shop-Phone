import { combineReducers } from 'redux'
import Category from '../reducers/shop/category';
import listProduct from '../reducers/shop/listproduct';
import catproduct from '../reducers/shop/catProduct';
import cart from '../reducers/cart/cart';
import detailproduct from '../reducers/productDetail'

const CombineReducers = combineReducers({
    Category, listProduct, catproduct, cart, detailproduct
})
export default CombineReducers;