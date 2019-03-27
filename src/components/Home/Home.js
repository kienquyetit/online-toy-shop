import React, { Component } from 'react';

import './Home.css';

import RightContent from './RightContent/RightContent';
import LeftMenu from './LeftMenu/LeftMenu';

class Home extends Component {
    render() {
        return (
            <div id="content" className="container-fluid">
                <div className="row">
                    <LeftMenu />
                    <RightContent />
                </div>
            </div>
        )
    }
}

export default Home;