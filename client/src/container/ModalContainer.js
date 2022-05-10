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

  /**
   * function used to control input fields
   * @param {string} key input name
   * @param {string} value input value
   */
  const changeField = (key, value) => {
    // redux action to update user informations in user state
    dispatch(actionSetUserInformations(key, value));
  };

  // function used to close modal dependant on condition
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
    // redux action called to reset user informations in user state and clean input fields
    dispatch(actionResetUserInformations());
  };

  /**
   * funtion used to submit user informations update
   * @param {event} event
   */
  const handleEditSubmit = (event) => {
    // cancelled page reloading
    event.preventDefault();
    /**
     * redux action called to use userMiddleware
     * to make http request and update user informations
     */
    dispatch(actionUpdateUser());
    closeModal();
    dispatch(actionResetUserInformations());
  };

  /**
   * funtion used to delete an user
   * @param {event} event
   */
  const handleDeleteSubmit = (event) => {
    event.preventDefault();
    /**
     * redux action called to use userMiddleware
     * to make http request and delete an user
     */
    dispatch(actionDeleteUser());
    closeModal();
  };

  /**
   * function used to create an user
   * @param {event} event
   */
  const handleCreateSubmit = (event) => {
    event.preventDefault();
    /**
     * redux action called to use userMiddleware
     * to make http request and create an user
     */
    dispatch(actionCreateUser());
    closeModal();
    dispatch(actionResetUserInformations());
  };

  // depending on the condition displays a different modal
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

export default React.memo(EditModalContainer);
