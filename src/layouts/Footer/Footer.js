import React, { Component } from 'react'
import Product from './ProductFooter/ProductFooter'
import Company from './CompanyFooter/CompanyFooter'
import LearnMore from './LearnMore/LearnMore'
import ConnectWithUs from './ConnectWithUs/ConnectWithUs'
import BottomFooter from './BottomFooter/BottomFooter'

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid">
        <div className="container">
          <div className="row main-content-footer">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <Product />
            <Company />
            <LearnMore />
            <ConnectWithUs />
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          </div>
          <hr className="line-bottom" />
          <BottomFooter />
        </div>
      </footer>
    )
  }
}

export default Footer;
