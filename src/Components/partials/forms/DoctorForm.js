import React from 'react'

function DoctorForm() {
   return (
<form id="doctor-form">
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
                            <label for="age-grp">Specialty</label>
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
                    <div>
                        <div id="register-btn">
                            <button type="button" className="btn btn-primary">GET STARTED</button>
                        </div>
                    </div>
                </div>
            </form>
   )
}

export default DoctorForm;