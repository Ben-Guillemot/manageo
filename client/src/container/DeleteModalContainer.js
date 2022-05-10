import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionDeleteUser, actionToggleModal, actionResetUserInformations,
} from '../actions';
import DeleteModal from '../component/DeleteModal/DeleteModal';

function DeleteModalContainer() {
  const dispatch = useDispatch();

  const { deleteModal } = useSelector((state) => state.modal);

  const closeModal = (modal, bool) => {
    dispatch(actionToggleModal(modal, bool));
    dispatch(actionResetUserInformations());
  };

  const handleSubmit = () => {
    dispatch(actionDeleteUser());
  };

  if (!deleteModal) {
    return null;
  }

  return (
    <DeleteModal closeModal={closeModal} handleSubmit={handleSubmit} />
  );
}

DeleteModalContainer.propTypes = {};
DeleteModalContainer.defaultProps = {};
export default React.memo(DeleteModalContainer);
