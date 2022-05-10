import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import './editmodal.scss';

function EditModal({
  firstname,
  lastname,
  email,
  handleSubmit,
  changeField,
  closeModal,
}) {
  const [isButtonDisable, setIsButtonDisable] = useState(true);

  useEffect(() => {
    if (firstname.trim() === '' || lastname.trim() === '' || email.trim() === '') {
      if (isButtonDisable === false) {
        setIsButtonDisable(true);
      }
    } else {
      setIsButtonDisable(false);
    }
  }, [firstname, lastname, email]);

  return (
    <div className="modal__overlay">
      <form onSubmit={handleSubmit} className="modal__form">
        <Input
          type="text"
          labelValue="Prénom"
          nameValue="firstname"
          value={firstname}
          handleChange={changeField}
          idValue="firstname_input"
        />

        <Input
          type="text"
          labelValue="Nom"
          nameValue="lastname"
          value={lastname}
          handleChange={changeField}
          idValue="lastname_input"
        />

        <Input
          type="email"
          labelValue="Email"
          nameValue="email"
          value={email}
          handleChange={changeField}
          idValue="email_input"
        />
        <div className="modal__form-button-container">
          <button type="button" className="modal__form-button cancel" aria-label="Annuler la modification" onClick={closeModal}>Annuler</button>
          <input disabled={isButtonDisable} type="submit" className="modal__form-button validate" aria-label="Valider la modification" value="Valider" />
        </div>
      </form>
    </div>
  );
}

EditModal.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
EditModal.defaultProps = {
};
export default React.memo(EditModal);
