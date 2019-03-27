import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './RightContent.css';

class RightContent extends Component {
    render() {
        return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 right-content">
                <div className="container new-product-title">
                    <span> New Product </span>
                </div>
                <div className="container product-list">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 item">
                            <div className="product-detail">
                                <div className="product-top">
                                    <div className="promotion-product">
                                        <span className="promotion-text">50%</span>
                                    </div>
                                    <div className="image-product">
                                        <img src={require('../assets/Product.jpg')} />
                                    </div>
                                    <div className="action-product">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faExchangeAlt} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-name">
                                        <a href="#">*Event sale* Adidas Pureboost DPR “Grey One”</a>
                                    </h3>
                                    <span className="price">
                                        <del>
                                            <span className="amount"> 3.200.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="amount"> 1.690.000&nbsp;
                                            <span className="currencySymbol">đ</span>
                                            </span>
                                        </ins>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightContent;
