import React from "react";
import { connect } from 'react-redux'
import Cart from "../../../components/cart/cart";
import TemPay from "../../../components/cart/tempPayme";
import TempCart from "../../../components/cart/tempCart";
import { callapiGetListCart, callapiGetListProduct, apideletecart, apisetqty } from '../../actions/index'

class CtCart extends React.Component {
    componentDidMount() {
        this.props.getlistproduct()
        this.props.getlistcart()
    }
    render() {
        var { cart } = this.props
        return (
            <>
                <Cart >
                    {this.showCart(cart)}
                    {this.showPeyment(cart)}
                </Cart>
            </>
        )
    }
    showPeyment = (cart) => {
        var total = 0
        cart.forEach(element => {
            total += element.product.price * element.qty
        });
        return <TemPay total={total} />
    }
    showCart = (cart) => {
        return cart.map((item, index) => {
            return <TempCart key={index} item={item} index={index} setqty={this.props.setqty} deletecart={this.props.deletecart} />
        })
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        setqty: (id, data) => {
            dispatch(apisetqty(id, data))
        },
        deletecart: (id) => {
            dispatch(apideletecart(id))
        },
        getlistcart: () => {
            dispatch(callapiGetListCart())
        },
        getlistproduct: () => {
            dispatch(callapiGetListProduct())
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CtCart)
