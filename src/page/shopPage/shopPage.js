import React from "react";
import '../../acsets/sass/shop.scss'
import CtCategory from "../../redux/containers/ShopPage/ctCategory";
import CtListProduct from "../../redux/containers/ShopPage/ctListProduct";
class ShopPage extends React.Component {
    render() {
        return (
            <>
                <div className="shop">
                    <div className="container">
                        <div className="row">
                            <h1 className="text-center w-100 mt-3 border border-dark">SHOP</h1>
                        </div>
                        <div className="row">
                            <CtCategory />
                            <CtListProduct />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ShopPage