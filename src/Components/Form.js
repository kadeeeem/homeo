import React from 'react'
import DoctorForm from './partials/forms/DoctorForm'
import PatientForm from './partials/forms/PatientForm'
import ModalDisplay from './partials/forms/FormModal'

function Form() {
    return (

        <div>
            {/* Doc Form */}
            <ModalDisplay title="Doctor" buttonLabel="Practitioner">
                <DoctorForm />
            </ModalDisplay>
            
            {/* Patient Form */}
            <ModalDisplay title="Patient" buttonLabel="Patient">
                <PatientForm />
            </ModalDisplay>
            
        </div>
    )
}

export default Form;