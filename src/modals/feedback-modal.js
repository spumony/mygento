import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const FeedbackModal = ({ isOpen, toggle, surname, reset }) => {
  const handleClose = () => {
    toggle();
    reset();
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={handleClose}
      className="modal-dialog modal-dialog-scrollable"
    >
      <ModalHeader toggle={handleClose}>Спасибо {surname}!</ModalHeader>
      <ModalBody>Мы скоро свяжемся с вами</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleClose} block>
          Понятно
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default FeedbackModal;
