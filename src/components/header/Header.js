 
import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import Navbar from '../navbar/Navbar';
import { openModal, selectModal } from '../../redux-toolkit/slices/modalSlice';
import Modal from '../modals/Modal'; 
import "./Header.css";



const Header = () => {

const dispatch = useDispatch();
const modal = useSelector(selectModal);


  const handleOpen = () => {
    dispatch(openModal());
  
  };


  return (
    <>
    <Navbar  />
 <div className="section">
  <div className="content">
    <div className="text1">
      <div className="heading">
      <h1>welcome to the company<br/> as a software developer </h1>
      </div>
      <div className="para">
<p>congratulations to all for your dedication and<br/>hard work at every moment for the growth<br/> and development of the company. </p>
      </div>
      <div className="btn_">
                <button type ="button" className="begin" onClick={handleOpen}>{modal.isOpen && <Modal  />}ready to begin...</button>
            </div>
    </div>
  </div>
 </div>
 
    </>
  )
}

export default Header;
