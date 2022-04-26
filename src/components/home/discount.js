import React from "react";

class Discount extends React.Component {
    render() {
        return (
            <>
                <div className="product-discount">
                    <h3>
                        Sản phẩm khuyễn mãi
                    </h3>
                    <div className="listproduct-discount">
                        {this.props.showproductdiscount}
                    </div>
                </div>
            </>
        )
    }
}
export default Discount