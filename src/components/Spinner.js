import React, {Component} from 'react';

class Spinner extends Component {
    render() {
        return (
            <>
                <div className="col-md-3">
                    <div className="my-3">
                        <div className="card border border-secondary rounded-0" aria-hidden="true">
                            <img src="/placeholder-image.jpg" className="card-img-top" alt="..." style={{ height: "230px", width: "auto" }} />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                {/*<a className="btn btn-sm btn-dark rounded-0 disabled placeholder col-6" aria-disabled="true"></a>*/}
                                <button type="button" className="btn btn-lg btn-dark rounded-0 disabled placeholder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Spinner;