
import React from 'react';
import { useDispatch} from 'react-redux';
import { closeModal} from '../../redux-toolkit/slices/modalSlice';
import "./Modal.css";

const Modal = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className ="modal">
      <div className="modal-content">
        <h2>Welcome</h2>
        <p>The Employee agrees that during the Employment Period, he/she shall devote his/her full business time to the business affairs of the Company and shall perform the duties assigned to him/her faithfully and efficiently.</p>

        <button type="button" className="close" onClick={handleClose}>close</button>
      </div>
    </div>
  );
};

export default Modal;
