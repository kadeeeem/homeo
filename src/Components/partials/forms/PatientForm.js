import React from 'react'
import UserForm from './BaseForm'

function PatientForm(props) {
    return (
    <form id="patient-form">
                <button className="close" onClick={props.onClick}><i class="fas fa-times"></i></button>
                <h1>Patient Form</h1>
                <div id="form-info">
                    <div className="row">
                        <UserForm size="lg-6" for="first-name" name="nameFirst" label="First Name" />
                        <UserForm size="lg-6" for="last-name" name="nameLast" label="Last Name" />
                    </div>
                    <div className="row">
                        <UserForm size="lg-2" for="age-grp" name="age-grp" label="Age Group" />
                    </div>
                    <div className="row">
                        <UserForm size="lg-4" for="insurance" name="insurance" label="Insurance Provider. If none, type N/A" />
                    </div>
                    <div className="row">
                        <UserForm size="lg-4" for="email" name="email" label="Email Address" />
                    </div>
                </div>
                <div>
                    <div id="register-btn">
                        <button type="button" className="btn btn-primary">GET STARTED</button>
                    </div>
                </div>
    </form>
    )
}

export default PatientForm;