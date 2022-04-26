import React from "react";
import { connect } from 'react-redux'
import { callapiPostProduct, callapiPutProduct } from "../../redux/actions";
class DetailProduct extends React.Component {

    render() {
        let { product } = this.props
        return (
            <>
                <div className="panel">
                    <div className="panel-left">
                        <img src={product.image} alt="{product.name}" />
                    </div>
                    <div className="panel-right">
                        <div className="header">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                        <hr />
                        <p>tags:</p>
                        <div className="footer">
                            <span>price:  <span>{product.price - product.price * product.discount / 100}</span></span>
                            <button onClick={() => this.onaddtocart(product)} className="btn btn-primary" >mua ngay</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    onaddtocart = (product) => {
        let { cart } = this.props
        var findCart = cart.findIndex(x => x.product.id === product.id)
        var data = {
            product: product,
            qty: findCart === -1 ? 1 : cart[findCart].qty += 1
        }
        if (findCart === -1) {
            this.props.apipostcart(data)
        } else {
            this.props.apiputcart(data, findCart)
        }
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.detailproduct,
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        apipostcart: (data) => {
            dispatch(callapiPostProduct(data))
        },
        apiputcart: (data, id) => {
            dispatch(callapiPutProduct(data, id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)