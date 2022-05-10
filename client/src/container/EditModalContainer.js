import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionUpdateUser, actionSetUserInformations } from '../actions';
import EditModal from '../component/EditModal/EditModal';

function EditModalContainer() {
  const dispatch = useDispatch();
  const {
    firstname, lastname, email,
  } = useSelector((state) => state.user);

  const handleSubmit = () => {
    dispatch(actionUpdateUser());
  };

  const changeField = (key, value) => {
    dispatch(actionSetUserInformations(key, value));
  };
  return (
    <EditModal
      firstname={firstname}
      lastname={lastname}
      email={email}
      handleSubmit={handleSubmit}
      changeField={changeField}
    />
  );
}

EditModalContainer.propTypes = {};
EditModalContainer.defaultProps = {};
export default React.memo(EditModalContainer);
