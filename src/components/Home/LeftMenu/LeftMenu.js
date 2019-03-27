import React, { Component } from 'react'

import './LeftMenu.css'

class LeftMenu extends Component {

    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 row left-menu">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header category-title-card-header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link category-title" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Department
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseOne" className="collapse show collapse-content" aria-labelledby="headingOne">
                                <div className="card-body">
                                    <label className="checkbox-wrap">lawn games
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">dolls, puppets, and figures
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">sport toys
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">broad games and card games
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">water toys and floats
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header category-title-card-header">
                                <h5 className="mb-0">
                                    <button className="btn btn-link category-title collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Collapsible Group Item #2
                                </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse collapse-content" aria-labelledby="headingTwo">
                                <div className="card-body">
                                    <label className="checkbox-wrap">lawn games
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">dolls, puppets, and figures
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">sport toys
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">broad games and card games
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">water toys and floats
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header category-title-card-header" id="headingThree">
                                <h5 className="mb-0">
                                    <button className="btn btn-link category-title collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Collapsible Group Item #3
                                </button>
                                </h5>
                            </div>
                            <div id="collapseThree" className="collapse collapse-content" aria-labelledby="headingThree">
                                <div className="card-body">
                                    <label className="checkbox-wrap">lawn games
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">dolls, puppets, and figures
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">sport toys
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">broad games and card games
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="checkbox-wrap">water toys and floats
                                        <input type="checkbox" defaultChecked={false} />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftMenu;
