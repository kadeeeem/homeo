import React from 'react';
import Doc from './images/doc.svg';
import DoctorForm from './partials/forms/DoctorForm'
import PatientForm from './partials/forms/PatientForm'
import ModalDisplay from './partials/forms/FormModal'

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
                        {/* <button id="hcp-btn" type="button" className="btn btn-primary">PRACTITIONER</button> */}
                        <ModalDisplay title="Doctor" buttonLabel="Practitioner">
                            <DoctorForm />
                        </ModalDisplay>
                    </div>
                    <div className="col-lg-6">
                        {/* <button id="patient-btn" type="button" className="btn btn-primary" onclick="">PATIENT</button> */}
                        <ModalDisplay title="Patient" buttonLabel="Patient">
                            <PatientForm />
                        </ModalDisplay>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Button;
