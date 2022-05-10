import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionUpdateUser,
  actionDeleteUser,
  actionCreateUser,
  actionSetUserInformations,
  actionToggleModal,
  actionResetUserInformations,
} from '../actions';
import EditModal from '../component/EditModal/EditModal';
import DeleteModal from '../component/DeleteModal/DeleteModal';

function EditModalContainer() {
  const dispatch = useDispatch();
  const {
    firstname, lastname, email,
  } = useSelector((state) => state.user);

  const { editModal, deleteModal, createModal } = useSelector((state) => state.modal);

  const changeField = (key, value) => {
    dispatch(actionSetUserInformations(key, value));
  };

  const closeModal = () => {
    if (editModal) {
      dispatch(actionToggleModal('editModal', false));
    }
    if (createModal) {
      dispatch(actionToggleModal('createModal', false));
    }
    if (deleteModal) {
      dispatch(actionToggleModal('deleteModal', false));
    }
    dispatch(actionResetUserInformations());
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(actionUpdateUser());
    closeModal();
    dispatch(actionResetUserInformations());
  };

  const handleDeleteSubmit = (event) => {
    event.preventDefault();
    dispatch(actionDeleteUser());
    closeModal();
  };

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    dispatch(actionCreateUser());
    closeModal();
    dispatch(actionResetUserInformations());
  };

  if (editModal) {
    return (
      <EditModal
        firstname={firstname}
        lastname={lastname}
        email={email}
        handleSubmit={handleEditSubmit}
        changeField={changeField}
        closeModal={closeModal}
      />
    );
  }

  if (deleteModal) {
    return (
      <DeleteModal
        closeModal={closeModal}
        handleSubmit={handleDeleteSubmit}
      />
    );
  }

  if (createModal) {
    return (
      <EditModal
        firstname={firstname}
        lastname={lastname}
        email={email}
        handleSubmit={handleCreateSubmit}
        changeField={changeField}
        closeModal={closeModal}
      />
    );
  }
}

EditModalContainer.propTypes = {};
EditModalContainer.defaultProps = {};
export default React.memo(EditModalContainer);
