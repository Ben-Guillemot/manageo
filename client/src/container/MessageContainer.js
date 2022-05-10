import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionToggleMessage,
} from '../actions';
import EditModal from '../component/EditModal/EditModal';

function EditModalContainer() {
  const dispatch = useDispatch();
  const {
    firstname, lastname, email,
  } = useSelector((state) => state.user);

  const { editModal } = useSelector((state) => state.modal);

  const changeField = (key, value) => {
    dispatch(actionSetUserInformations(key, value));
  };

  const closeModal = (modal, bool) => {
    dispatch(actionToggleModal(modal, bool));
    dispatch(actionResetUserInformations());
  };

  const handleSubmit = () => {
    dispatch(actionUpdateUser());
    dispatch(actionResetUserInformations());
  };

  if (!editModal) {
    return null;
  }

  return (
    <EditModal
      firstname={firstname}
      lastname={lastname}
      email={email}
      handleSubmit={handleSubmit}
      changeField={changeField}
      closeModal={closeModal}
    />
  );
}

EditModalContainer.propTypes = {};
EditModalContainer.defaultProps = {};
export default React.memo(EditModalContainer);
