import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (modalOpen) {
                        return (
                            <div className="modal-container">
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize">
                                            <h5>Item added to the cart</h5>
                                            <img src={img} alt="product" className="img-fluid" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price: ${price}</h5>
                                            <Link to="/">
                                                <button className="details-btn-blue" onClick={() => closeModal()}>
                                                    Store
                                                </button>
                                            </Link>
                                            <Link to="/cart">
                                                <button className="details-btn-orange" onClick={() => closeModal()}>
                                                    Go To Cart
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else return null;
                }}
            </ProductConsumer>
        )
    }
}
