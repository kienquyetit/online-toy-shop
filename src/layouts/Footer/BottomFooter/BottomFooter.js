import React, { Component } from 'react'

class BottomFooter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <p>@2019 QuyetDK Inc. All Rights Reserved</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <span>Tems of Service. Privacy Policy. Site Map. </span>
                    <select>
                        <option value="volvo">Select Language</option>
                        <option value="vie">Vietnamese</option>
                        <option value="eng">English</option>
                        <option value="jp">Japanese</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default BottomFooter;
