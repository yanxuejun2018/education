import React, { Component } from 'react'
import RcPagination from 'rc-pagination';
 import 'rc-pagination/dist/rc-pagination.css'
class Pagination extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="pagination pull-right">
                <RcPagination {...this.props} hideOnSinglePage showQuickJumper ></RcPagination>
            </div>
        )
    }
}
export default Pagination;