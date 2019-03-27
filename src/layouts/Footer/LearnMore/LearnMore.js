import React, { Component } from 'react'

class LearnMore extends Component {
    render() {
        return (
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="learn-more-title-footer title-footer">
                    <span>Learn More</span>
                </div>
                <div className="learn-more-support-footer">
                    <span>Support</span>
                </div>
                <div className="learn-more-developers-footer">
                    <span>Developers</span>
                </div>
                <div className="learn-more-referral-program-footer">
                    <span>Referral Program</span>
                </div>
                <div className="learn-more-affiliate-program-footer">
                    <span>Affiliate Program</span>
                </div>
                <div className="learn-more-reseller-program-footer">
                    <span>Reseller Program</span>
                </div>
                <div className="learn-more-folder-sharing-faq-footer">
                    <span>Folder Sharing FAQ</span>
                </div>
            </div>
        )
    }
}

export default LearnMore;
