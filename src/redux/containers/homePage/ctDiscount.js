import React from "react";
import Discount from "../../../components/home/discount";
import { connect } from 'react-redux'
import { withRouter } from '../../../config/withrouter'
import { detailproduct, callapiGetListProduct, callapiGetListCart } from "../../actions";

class CtDiscount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.getlistproduct()
        this.props.getlistcart()
    }
    onproductdetail = (item) => {
        this.props.detailproduct(item)
        this.props.with.navigate(`/${item.name}`)
    }
    render() {
        let { productsdiscount } = this.props
        return (
            <>
                <Discount showproductdiscount={this.showproductdiscount(productsdiscount)} />
            </>
        )
    }
    showproductdiscount = (productsdiscount) => {
        let resuft = null
        if (productsdiscount && productsdiscount.length > 0) {
            resuft = productsdiscount.sort((a, b) => b.discount - a.discount).slice(0, 5).map((item, index) => {
                return (
                    <div onClick={() => this.onproductdetail(item)} key={index} className="panel">
                        <div className="panel-header">
                            <img src={item.image} alt={item.name} />
                            <span className="badge bg-danger">-{item.discount}%</span>
                        </div>
                        <div className="panel-body">
                            <h6>{item.name}</h6>
                            <span className="price">{(item.price - item.price * item.discount / 100).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'VND',
                            })} <span>{item.price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'VND',
                            })}</span> </span>
                        </div>
                    </div>
                )
            })
        }
        return resuft
    }
}
const mapStateToProps = (state) => {
    return {
        productsdiscount: state.listProduct
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
        detailproduct: (item) => {
            dispatch(detailproduct(item))
        },
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CtDiscount))