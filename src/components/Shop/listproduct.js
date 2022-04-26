import React from "react";


class ListProduct extends React.Component {
    render() {
        return (
            <>
                <div className="col-md-9 col-sm-9">
                    <div className="tab-pane fade show active listproduct" id="list-samsung" role="tabpanel">
                        {this.props.showProduct}
                    </div>
                </div>
            </>
        )
    }
}
export default ListProduct