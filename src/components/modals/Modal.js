
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal,selectModal } from '../../redux-toolkit/slices/modalSlice';
import "./Modal.css";

const Modal = () => {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
   
      <div className={modal.isOpen ? 'modal open' :''}>
      <div className="modal-content">
        <h2>welcome</h2>
        <p>the Employee agrees that during the Employment Period, he/she shall devote his/her full business time to the business affairs of the Company and shall perform the duties assigned to him/her faithfully and efficiently.
        </p>
        <button type="button" className="close" onClick={handleClose}>close</button>
      </div>
    </div>
    )
  
};

export default Modal;
