import React from 'react';
import Doc from './images/doc.svg';

function Button() {
    return (
        <section className="container">
            <div id="button-patient-doctor">
                <div id="doc-img">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="doc-img" src={Doc} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <img className="doc-img" src={Doc} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <button id="hcp-btn" type="button" className="btn btn-primary">PRACTITIONER</button>
                    </div>
                    <div className="col-lg-6">
                        <button id="patient-btn" type="button" className="btn btn-primary" onclick="">PATIENT</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Button;
