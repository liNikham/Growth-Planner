import AddChildForm from "../AddChildForm/AddChildForm";
import style from "./Modal.module.css";

const Modal = ({ show, setShow, setFormIsOpen }) => {
  return (
    <div className={style.modal}>
      <div>
        <AddChildForm
          show={show}
          setShow={setShow}
          setFormIsOpen={setFormIsOpen}
        />
      </div>
    </div>
  );
};

export default Modal;
