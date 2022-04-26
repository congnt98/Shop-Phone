import React from "react";


class TempCart extends React.Component {
    render() {
        var { item, index } = this.props
        return (
            <>
                <tr key={index}>
                    < td > <img src={item.product.image} alt={item.product.name} /></td >
                    <td>{item.product.name}</td>
                    <td>
                        <div>
                            <span id="resuft">{item.qty}
                            </span>
                            <button className=" btn_table btn_icrease" onClick={() => this.indecream(item.id, item.qty + 1, item.product)}>+</button>
                            <button className="btn_table btn_decrease" onClick={() => this.indecream(item.id, item.qty - 1, item.product)}>-</button>
                        </div>
                    </td>
                    <td>{item.product.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'VND',
                    })}</td>
                    <td>{(item.product.price * item.qty).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'VND',
                    })}</td>
                    <td><button className="btn_delete" onClick={() => this.deletecart(item.id)}><i className="fa fa-trash"></i>

                    </button></td>
                </tr >
            </>
        )
    }
    deletecart = (id) => {
        this.props.deletecart(id)
    }
    indecream = (id, qty, product) => {
        let data = {
            product: product,
            qty: qty
        }
        this.props.setqty(id, data)
    }
}

export default TempCart
