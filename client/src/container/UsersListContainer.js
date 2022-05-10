import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import UsersList from '../component/UsersList/UsersList';
import { actionGetUserInformations } from '../actions';

function UsersListContainer({
  firstname,
  lastname,
  email,
  id,
}) {
  const dispatch = useDispatch();

  const handleEditButtonClick = (datas) => {
    dispatch(actionGetUserInformations(datas));
  };
  return (
    <UsersList
      firstname={firstname}
      lastname={lastname}
      email={email}
      id={id}
      handleEditButtonClick={handleEditButtonClick}
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
