import React, { Component } from 'react';
import { withRouter } from "react-router";
import data from '../../assets/albums.json'
import './style.css'

class Album extends Component {
    constructor(props) {
        super(props);
    }
    productdetails(product) {
        console.log('product', product)
        this.props.history.push({pathname: "/view", params: product})
    }
    render() {
        const bindProduct = data.map((item, index) => {
            return (
                <div className="product" key={index} onClick={() => this.productdetails(item)}>
                    <div>ID: {item.id}</div>
                   <div>Proudct Name: {item.title}</div>
                </div>
            )
        })
        return (
            <div className="container">
                {bindProduct}
            </div>
        )
    }
}
export default withRouter(Album);