import React from 'react'
import UserForm from './BaseForm'

function PatientForm() {
    return (
    <form id="patient-form">
                <i class="fas fa-times"></i>
                <h1>REGISTER</h1>
                <div id="form-info">
                    <div className="row">
                        <UserForm size="lg-6" for="first-name" name="nameFirst" label="First Name" inputRequired="true"/>
                        <UserForm size="lg-6" for="last-name" name="nameLast" label="Last Name" inputRequired="true"/>
                    </div>
                    <div className="row">
                        <UserForm size="lg-2" for="age-grp" name="age-grp" label="Age Group" inputRequired="true"/>
                    </div>
                    <div className="row">
                        <UserForm size="lg-4" for="insurance" name="insurance" label="Insurance Provider. If none, type N/A" inputRequired="true"/>
                    </div>
                    <div className="row">
                        <UserForm size="lg-4" for="email" name="email" label="Email Address" inputRequired="false"/>
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