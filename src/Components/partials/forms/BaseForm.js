import React from 'react'

function UserForm(props) {
    return (
        <div className={"form-group col-" + props.size}>
        <label for={props.for}>{props.label}</label>
        <input type="text" name={props.name} id={props.name} className="form-control" required />
        </div>
    );
}

export default UserForm;