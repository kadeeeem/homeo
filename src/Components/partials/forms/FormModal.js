import React, {useState, Children,cloneElement} from 'react';
import { Button, Modal} from 'reactstrap';


const ModalDisplay = (props) => {

    const {buttonLabel} = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const formToggle = (e) => {
        e.preventDefault();
        setModal(!modal);
    };

    const childrenWithClose = Children.map(props.children, child =>{ 
        return cloneElement(child,{onClick: formToggle}) ;
    });

    return (
        <div>
            <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} size={"lg"}>
                {/* <ModalHeader toggle={toggle}>{title}</ModalHeader>     */}
                    {childrenWithClose}
            </Modal> 
        </div>

    );
}

export default ModalDisplay;