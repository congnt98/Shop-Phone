import React from "react";
import "./menu.scss"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class Menu extends React.Component {

    render() {
        var { cart } = this.props
        return (
            <>
                <ul className="navbar-nav mx-auto text-uppercase menu">
                    <li className="nav-item">
                        <Link to="/" className=" nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className=" nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className=" nav-link">Cart<span className="badge bg-danger">{this.showtotalcart(cart)}</span></Link>
                    </li>
                </ul>
            </>
        )
    }
    showtotalcart = (cart) => {
        var resuft = cart.map((cart, index) => {
            return cart.qty
        })
        return resuft && resuft.length > 0 ? resuft.reduce((total, current) => total + current) : '0'
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, null)(Menu)