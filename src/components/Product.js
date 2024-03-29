import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <div className="product-wrapper col-9 mx-auto col-md-6 col-lg-3 mb-4">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                <Link to="/smartphone-shop/details"><img src={`${process.env.PUBLIC_URL}/${img}`} alt="product" className="card-img-top" /></Link>

                                <button className="cart-btn" disabled={inCart} onClick={() => { value.addToCart(id); value.openModal(id) }}>
                                    {inCart ? (<p className="mb-0" disabled>In Cart</p>) : (<i className="fas fa-cart-plus"></i>)}
                                </button>
                            </div>)}

                    </ProductConsumer>

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0 pr-1">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}