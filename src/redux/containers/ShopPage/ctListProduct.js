import React from "react";
import ListProduct from "../../../components/Shop/listproduct";
import { connect } from 'react-redux'
import { callapiGetListProduct, callapiGetListCart, callapiPostProduct, callapiPutProduct } from "../../actions/index";

class CtListProduct extends React.Component {
    componentDidMount() {
        this.props.getlistproduct()
        this.props.getlistcart()
    }
    render() {
        var { listproduct, catproduct } = this.props
        if (catproduct && catproduct.length > 0) {
            listproduct = listproduct.filter(x => x.cat === catproduct)
        }
        return (
            <>
                <ListProduct showProduct={this.showProduct(listproduct)} />
            </>
        )
    }
    showProduct = (listproduct) => {
        if (listproduct && listproduct.length > 0) {
            return listproduct.map((product, index) => {
                return <div className="cart " key={index}>
                    <div className="cart-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="cart-body">
                        <h4> <strong>{product.name}</strong></h4>
                        <ul className="rating">
                            {this.showRating(product.rating)}
                        </ul>
                    </div >
                    <div className="cart-footer">
                        <span>{product.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'vnd',
                        })}</span>
                        <button className="btn btn-primary" onClick={() => this.addtocart(product)}>Thêm vào giỏ hàng</button>
                    </div>
                </div >
            })
        }
        else {
            return (<div>
                <h1>Không có gì</h1>
            </div>
            )
        }
    }
    addtocart = (product) => {
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
    showRating = (rating) => {
        var resuft = []
        for (let i = 1; i <= rating; i++) {
            resuft.push(<li key={i} className="item-rating">
                <i className="fa fa-star" aria-hidden="true"></i>
            </li>)
        }
        for (let j = 1; j <= 5 - rating; j++) {
            resuft.push(<li key={j + 10} className="item-rating">
                <i className="fa fa-star-o" aria-hidden="true"></i>
            </li>)
        }
        return resuft
    }
}
const mapStateToProps = (state) => {
    return {
        listproduct: state.listProduct,
        catproduct: state.catproduct,
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getlistcart: () => {
            dispatch(callapiGetListCart())
        },
        getlistproduct: () => {
            dispatch(callapiGetListProduct())
        },
        apipostcart: (data) => {
            dispatch(callapiPostProduct(data))
        },
        apiputcart: (data, id) => {
            dispatch(callapiPutProduct(data, id))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CtListProduct)