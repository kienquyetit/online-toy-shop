import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube, faBlogger, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

import './ConnectWithUs.css';

class ConnectWithUs extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="connect-with-us-title-footer title-footer">
                    <span>Connect With Us</span>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="facebook-btn social-network">
                            <span className="facebook-icon social-network-icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </span>
                            <p className="social-network-name">Facebook</p>
                        </div>
                        <div className="google-plus-btn social-network">
                            <span className="google-plus-icon social-network-icon">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </span>
                            <p className="social-network-name">Google+</p>
                        </div>
                        <div className="linked-in-btn social-network">
                            <span className="linked-in-icon social-network-icon">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                            <p className="social-network-name">LinkedIn</p>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="twitter-btn social-network">
                            <span className="twitter-icon social-network-icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                            <p className="social-network-name">Twitter</p>
                        </div>
                        <div className="youtube-btn social-network">
                            <span className="youtube-icon social-network-icon">
                                <FontAwesomeIcon icon={faYoutube} />
                            </span>
                            <p className="social-network-name">Youtue</p>
                        </div>
                        <div className="bloger-btn social-network">
                            <span className="bloger-icon social-network-icon">
                                <FontAwesomeIcon icon={faBlogger} />
                            </span>
                            <p className="social-network-name">Bloger</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConnectWithUs;