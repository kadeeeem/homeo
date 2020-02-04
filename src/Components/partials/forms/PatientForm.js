import React from 'react'

function PatientForm() {
    return (
    <form id="patient-form">
                <i class="fas fa-times"></i>
                <h1>REGISTER</h1>
                <div id="form-info">
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <label for="first-name">First Name</label>
                            <input type="text" name="nameFirst" id="nameFirst" className="form-control" required />
                        </div>
                        <div className="form-group col-lg-6">
                            <label for="last-name">Last Name</label>
                            <input type="text" name="nameLast" id="nameLast" className="form-control" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-2">
                            <label for="age-grp">Age Group</label>
                            <input type="text" name="age-grp" id="age-grp" className="form-control" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-4">
                            <label for="insurance">Insurance Provider. If none, type N/A</label>
                            <input type="text" name="insurance" id="insurance" className="form-control" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-4">
                            <label for="email">Email Address</label>
                            <input type="text" name="email" id="email" className="form-control" />
                        </div>
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