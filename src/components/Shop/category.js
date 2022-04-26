import React from "react";

class Category extends React.Component {
    render() {
        return (
            <>
                <div className="col-md-3 col-sm-3 pl-0">
                    <div className="list-group category" >
                        <span className="list-group-item list-group-item-action show  ">Danh mục sản phẩm </span>
                        {this.props.showCategory}
                    </div>
                </div>
            </>
        )
    }
}
export default Category