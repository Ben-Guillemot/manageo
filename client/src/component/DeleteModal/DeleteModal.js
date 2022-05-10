import React from 'react';
import PropTypes from 'prop-types';
import './deleteModal.scss';

function DeleteModal({
  closeModal,
  handleSubmit,
}) {
  const submitForm = (e) => {
    e.preventdefault();
    handleSubmit();
    closeModal('deleteModal', false);
  };

  return (
    <div className="modal__overlay">
      <form action="post" onSubmit={handleSubmit} className="modal__form">
        <p className="modal__form-content">Etes-vous sûr de vouloir supprimer cet utilisateur ?</p>
        <div className="modal__form-button-container">
          <button type="button" className="modal__form-button cancel" aria-label="Annuler la suppression" onClick={() => { closeModal(); }}>Annuler</button>
          <button type="submit" className="modal__form-button validate" aria-label="Valider la suppression" onClick={() => { submitForm(); }}>Valider</button>
        </div>
      </form>
    </div>
  );
}

DeleteModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
DeleteModal.defaultProps = {
};
export default React.memo(DeleteModal);
