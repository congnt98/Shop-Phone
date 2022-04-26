import React from "react";
import Category from "../../../components/Shop/category";
import { connect } from 'react-redux'
import { showCatproduct } from '../../actions/index'
import { withRouter } from "../../../config/withrouter";

class CtCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: ''
        }
    }
    render() {
        var { listcat, } = this.props
        return (
            <>
                <Category showCategory={this.showCategory(listcat)} />
            </>
        )
    }

    showCategory = (listcat) => {
        return listcat.map((cat, index) => {
            return <span onClick={() => this.pickCat(cat.tagname)} key={index} className={this.state.className === cat.tagname ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} >
                {cat.name}
            </span >
        })
    }
    pickCat = (catname) => {
        this.props.logcat(catname)
        this.setState({
            className: catname
        })
    }

}

const mapStateToProps = (state) => {
    return {
        listcat: state.Category,
        catname: state.catproduct
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        logcat: (catname) => {
            dispatch(showCatproduct(catname))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CtCategory))
