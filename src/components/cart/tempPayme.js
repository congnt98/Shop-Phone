import React from "react";
import { withRouter } from '../../config/withrouter'


class TemPay extends React.Component {
    render() {
        var { total } = this.props
        return (
            <>
                <tr>
                    <td colSpan="3"></td>
                    <td>
                        <h4>Tổng tiền</h4>
                    </td>
                    <td>
                        <h4>{total.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'VND',
                        })}</h4>
                    </td>
                    <td colSpan="3">
                        <button onClick={() => this.back()} className=" btn_table btn_payment"> <i
                            className="fa fa-angle-right"></i></button>
                    </td>
                </tr>
            </>
        )
    }
    back = () => {
        this.props.with.navigate(`/shop`)
    }
}
export default withRouter(TemPay)