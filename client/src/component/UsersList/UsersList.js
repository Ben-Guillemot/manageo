import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './userslist.scss';
import deleteIcon from '../../Assets/delete.png';
import editIcon from '../../Assets/editer.png';

function UsersList({
  // props from UsersListContainer
  firstname,
  lastname,
  email,
  id,
  handleEditButtonClick,
  handleDeleteButtonClick,
}) {
  // useState used to show or not  user email address
  const [showEmail, setShowEmail] = useState(false);

  // function to update the local state "showEmail"
  const emailButtonClick = () => {
    setShowEmail(!showEmail);
  };

  // function to get user informations and open editModal
  const takeInfosToEdit = () => {
    handleEditButtonClick({
      id, firstname, lastname, email,
    });
  };

  // function to get user informations and open deleteModal
  const takeInfosToDelete = () => {
    handleDeleteButtonClick({
      id, firstname, lastname, email,
    });
  };

  return (
    <section className="userslist__container">
      <div className="userslist__container-info-container">
        <button type="button" className="userslist__container-info-container-button" onClick={emailButtonClick}>{showEmail ? '-' : '+'}</button>
        <div className="userslist__container-info-container-content">
          <p>
            {lastname}
            {' '}
            {firstname}
          </p>
          {showEmail && (
            <p className="email">{email}</p>
          )}
        </div>
      </div>
      <div className="userslist__container-buttons-container">
        <button type="button" onClick={takeInfosToEdit} className="userslist__container-buttons-container-button" aria-label="Modifier l'utilisateur">
          <img src={editIcon} alt="bouton édition" className="userslist__container-buttons-container-img" />
        </button>
        <button type="button" onClick={takeInfosToDelete} className="userslist__container-buttons-container-button" aria-label="Supprimer l'utilisateur">
          <img src={deleteIcon} alt="bouton supprimer" className="userslist__container-buttons-container-img" />
        </button>
      </div>
    </section>
  );
}

UsersList.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleEditButtonClick: PropTypes.func.isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
};
UsersList.defaultProps = {
};
export default React.memo(UsersList);
