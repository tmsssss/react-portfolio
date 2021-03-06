import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
                    <section className="mh-service">
            <div className="container">
                <div className="row section-separator">
                    <div className="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        <h3>What I do</h3>
                    </div>
                    <div className="col-sm-4">
                        <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                            <i className="fa fa-bullseye purple-color"></i>
                            <h3>UI Design</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                magna aliquam erat volutpat.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                            <i className="fa fa-code iron-color"></i>
                            <h3>Web Development</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                magna aliquam erat volutpat.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                            <i className="fa fa-object-ungroup sky-color"></i>
                            <h3>App Development</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                magna aliquam erat volutpat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        )
    }
}
