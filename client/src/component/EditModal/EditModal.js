import React from 'react';
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
  const submitForm = (e) => {
    e.preventdefault();
    handleSubmit();
    closeModal('editModal', false);
  };

  return (
    <div className="modal__overlay">
      <form action="post" onSubmit={handleSubmit} className="modal__form">
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
          <button type="button" className="modal__form-button cancel" onClick={() => { closeModal('editModal', false); }}>Annuler</button>
          <button type="submit" className="modal__form-button validate" onClick={() => { submitForm(); }}>Valider</button>
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
