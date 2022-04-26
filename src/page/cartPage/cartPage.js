import React from "react";
import '../../acsets/sass/cart.scss'
import CtCart from "../../redux/containers/cartPage/CtCart";

class CartPage extends React.Component {
    render() {
        return (
            <>
                <section className="cart">
                    <div className="container">
                        <div className="row">
                            <h1 className="text-center w-100 mt-3 border border-dark">CART</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="cart_table table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>Sản Phẩm</td>
                                            <td> Số Lượng</td>
                                            <td> Giá</td>
                                            <td>Tổng công</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <CtCart />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default CartPage