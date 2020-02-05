import React from 'react'
import DoctorForm from './partials/forms/DoctorForm'
import PatientForm from './partials/forms/PatientForm'

function Form() {
    return (

        <div>
            {/* Doc Form */}
            <DoctorForm />
            {/* Patient Form */}
            <PatientForm />
            
        </div>
    )
}

export default Form;