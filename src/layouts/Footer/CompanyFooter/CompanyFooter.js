import React, { Component } from 'react'

class CompanyFooter extends Component {
    render() {
        return (
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="company-title-footer title-footer">
                    <span>Company</span>
                </div>
                <div className="company-about-footer">
                    <span>About Us</span>
                </div>
                <div className="company-blog-footer">
                    <span>Blog</span>
                </div>
                <div className="company-news-footer">
                    <span>News</span>
                </div>
                <div className="company-press-release-footer">
                    <span>Press Releases</span>
                </div>
                <div className="company-jobs-footer">
                    <span>Jobs</span>
                </div>
                <div className="company-contact-us-footer">
                    <span>Contact Us</span>
                </div>
            </div>
        )
    }
}

export default CompanyFooter;