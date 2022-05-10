import React from 'react';
import PropTypes from 'prop-types';
import './userslist.scss';
import deleteIcon from '../../Assets/delete.png';
import editIcon from '../../Assets/editer.png';

function UsersList({
  firstname,
  lastname,
  email,
  id,
  handleEditButtonClick,
}) {
  const takeInfosOnClick = () => {
    handleEditButtonClick({
      id, firstname, lastname, email,
    });
  };

  return (
    <section>
      <div>
        <p>
          {lastname}
          {' '}
          {firstname}
        </p>
        <button type="button" onClick={takeInfosOnClick}>
          <img src={editIcon} alt="bouton édition" />
        </button>
        <button type="button">
          <img src={deleteIcon} alt="bouton supprimer" />
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
};
UsersList.defaultProps = {
};
export default React.memo(UsersList);
