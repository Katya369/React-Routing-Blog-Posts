import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';
// const Modal = ({ children, onClose }) => {
  const Modal = ({ children }) => {
    const navigate = useNavigate();
const closeHandler = () => {
navigate('..') //or navigate('/') 
};

  return (
    <>
      {/* <div className={classes.backdrop} onClick={onClose} /> */}
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
