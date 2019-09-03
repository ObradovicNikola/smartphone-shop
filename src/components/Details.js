import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={`${process.env.PUBLIC_URL}/${img}`} alt="product" className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">more about this product:</p>
                                    <p className="text-muted lead">{info}</p>
                                    <Link to="/smartphone-shop/">
                                        <button className="details-btn-blue">Back To Products</button>
                                    </Link>
                                    <button className="details-btn-orange" disabled={inCart} onClick={() => {
                                        value.addToCart(id)
                                        value.openModal(id)
                                    }}>
                                        {inCart ? "InCart" : "Add To Cart"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
