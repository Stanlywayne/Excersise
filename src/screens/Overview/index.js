import React, { Component } from 'react';
import { withRouter } from "react-router";
import photos from '../../assets/photos.json'
import './styleview.css'

class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productDetails: []
        }
    }

    componentDidMount() {
        if ( this.props.location.params) {
            console.log('view', this.props.location.params)
            let selectedProduct = photos.filter((item)=> {
                return item.albumId === this.props.location.params.id
            })
            this.setState({productDetails : selectedProduct})
        }
    }
    render() {
        const binddata = this.state.productDetails.map((item, index) => {
            return (
                <div className="productlist" key={index}>
                    <div>{item.albumId}</div>
                    <div>{item.id}</div>
                    <div>{item.title}</div>
                    <div><img src={item.url} style={{width: 100}}/></div>
                </div>
            )
        })
        return (
            <div className="container">
                {binddata}
            </div>
        )
    }
}
export default withRouter(View);