import React from "react";
import CtDiscount from "../../../../redux/containers/homePage/ctDiscount";
import '../content/content.scss'
class Discount extends React.Component {
    render() {
        return (
            <>
                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <CtDiscount />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Discount