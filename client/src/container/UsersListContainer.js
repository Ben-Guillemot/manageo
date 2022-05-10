import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import UsersList from '../component/UsersList/UsersList';
import { actionGetUserInformations, actionToggleModal } from '../actions';

function UsersListContainer({
  firstname,
  lastname,
  email,
  id,
}) {
  const dispatch = useDispatch();

  const handleEditButtonClick = (datas) => {
    dispatch(actionGetUserInformations(datas));
    dispatch(actionToggleModal('editModal', true));
  };

  const handleDeleteButtonClick = (datas) => {
    dispatch(actionGetUserInformations(datas));
    dispatch(actionToggleModal('deleteModal', true));
  };
  return (
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
UsersListContainer.defaultProps = {};
export default React.memo(UsersListContainer);
