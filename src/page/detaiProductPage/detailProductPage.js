import React from "react";
import DetailProduct from "../../components/home/detailproduct";
import '../detaiProductPage/detailProductPage.scss'
class DetailProductPage extends React.Component {
    render() {
        return (
            <>
                <section className="detail-product">
                    <DetailProduct />
                </section>
            </>
        )
    }
}
export default DetailProductPage