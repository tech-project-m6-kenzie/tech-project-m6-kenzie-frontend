import { useContext } from "react";
import { SlClose } from "react-icons/sl";

import { AuthContext } from "../../context/AuthContext";

const Modal = ({ children, closeModal, modalState, openLoginForm, openRegisterForm }) => {
  return (
    <div className="modal">
      <div className="container-modal">
        <div>
          {" "}
          <button className="container-btn-close-modal close" onClick={closeModal}>
            <SlClose />
          </button>
        </div>

        {children}
        <div>
          {modalState === 'login' ? (
            <div className="container-btn-close-modal">
              <button type="button" className="btn-login" onClick={openRegisterForm}>
                Fazer cadastro!
              </button>
            </div>
          ) : (
            <div className="container-btn-close-modal">
              <button type="button" className="btn-login" onClick={openLoginForm}>
                Já tenho cadastro! <strong>Fazer Login!</strong>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
