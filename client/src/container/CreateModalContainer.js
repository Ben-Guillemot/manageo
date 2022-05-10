import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionCreateUser, actionSetUserInformations, actionToggleModal, actionResetUserInformations,
} from '../actions';
import CreateModal from '../component/CreateModal/CreateModal';

function CreateModalContainer() {
  const dispatch = useDispatch();
  const {
    firstname, lastname, email,
  } = useSelector((state) => state.user);

  const { createModal } = useSelector((state) => state.modal);

  const changeField = (key, value) => {
    dispatch(actionSetUserInformations(key, value));
  };

  const closeModal = (modal, bool) => {
    dispatch(actionToggleModal(modal, bool));
    dispatch(actionResetUserInformations());
  };

  const handleSubmit = () => {
    dispatch(actionCreateUser());
    dispatch(actionResetUserInformations());
  };

  if (!createModal) {
    return null;
  }

  return (
    <CreateModal
      firstname={firstname}
      lastname={lastname}
      email={email}
      handleSubmit={handleSubmit}
      changeField={changeField}
      closeModal={closeModal}
    />
  );
}

CreateModalContainer.propTypes = {};
CreateModalContainer.defaultProps = {};
export default React.memo(CreateModalContainer);
