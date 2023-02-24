import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import UserContext from "../../store/UserContext";
import Builder from "../BuildPage/Builder";

const Model = (props) => {
  const userCtx = useContext(UserContext);
  return (
    <Modal
      {...props}
      size='xl'
      dialogClassName='modal-90w'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {userCtx.isView.toUpperCase()} COMPONENT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Builder onHide={props.onHide} />
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg bg-primary' onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Model;
