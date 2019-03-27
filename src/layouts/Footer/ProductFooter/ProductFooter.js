import React, { Component } from 'react'

class ProductFooter extends Component {
    render() {
        return (
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="product-title-footer title-footer">
                    <span>Product</span>
                </div>
                <div className="product-business-footer">
                    <span>Business</span>
                </div>
                <div className="product-compare-footer">
                    <span>Compare</span>
                </div>
                <div className="product-features-footer">
                    <span>Features</span>
                </div>
                <div className="product-pricing-footer">
                    <span>Pricing</span>
                </div>
                <div className="product-mobile-footer">
                    <span>Mobile</span>
                </div>
                <div className="product-app-showcase-footer">
                    <span>App Showcase</span>
                </div>
                <div className="product-download-footer">
                    <span>Download</span>
                </div>
            </div>
        )
    }
}

export default ProductFooter;