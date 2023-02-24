import React from "react";
import { Button, Modal } from "react-bootstrap";
import Builder from "../BuildPage/Builder";

const Model = (props) => {
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
          Build Your Own Page
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Builder onHide={props.onHide} selectedJson={props.selectedJson} />
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
