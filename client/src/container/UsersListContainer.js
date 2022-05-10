import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import UsersList from '../component/UsersList/UsersList';
import { actionGetUserInformations, actionToggleModal } from '../actions';

function UsersListContainer({
  // props from App component
  firstname,
  lastname,
  email,
  id,
}) {
  const dispatch = useDispatch();

  /**
   * funtion to get user's informations and
   * open editModal
   * @param {object} datas object with user's informations (id, firstname, lastname, email)
   */
  const handleEditButtonClick = (datas) => {
    // redux action called to get user's informations in user state
    dispatch(actionGetUserInformations(datas));
    // redux action called to change state of editModal in modal state
    dispatch(actionToggleModal('editModal', true));
  };

  /**
   * funtion to get user's informations and
   * open deleteModal
   * @param {object} datas object with user's informations (id, firstname, lastname, email)
   */
  const handleDeleteButtonClick = (datas) => {
    dispatch(actionGetUserInformations(datas));
    // redux action called to change state of deleteModal in modal state
    dispatch(actionToggleModal('deleteModal', true));
  };
  return (
    // return UsersList component with props
    <UsersList
      firstname={firstname}
      lastname={lastname}
      email={email}
      id={id}
      handleEditButtonClick={handleEditButtonClick}
      handleDeleteButtonClick={handleDeleteButtonClick}
    />
  );
}

UsersListContainer.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default React.memo(UsersListContainer);
