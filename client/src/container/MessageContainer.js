import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionToggleMessage } from '../actions';
import Message from '../component/Message/Message';

function MessageContainer() {
  const dispatch = useDispatch();

  const stopShowMessage = (message) => {
    setTimeout(() => dispatch(actionToggleMessage(message, false)), 3000);
  };
  const {
    createSuccess,
    updateSuccess,
    deleteSuccess,
    errorMessage,
  } = useSelector((state) => state.message);

  if (createSuccess) {
    return (
      <Message
        classname="success"
        content="Membre créé avec succès !"
        stopShowMessage={stopShowMessage}
        message="createSuccess"
      />
    );
  }
  if (updateSuccess) {
    return (
      <Message
        classname="success"
        message="updateSuccess"
        stopShowMessage={stopShowMessage}
        content="Membre modifié avec succès !"
      />
    );
  }
  if (deleteSuccess) {
    return (
      <Message
        classname="success"
        message="deleteSuccess"
        stopShowMessage={stopShowMessage}
        content="Membre supprimé avec succès !"
      />
    );
  }
  if (errorMessage) {
    return (
      <Message
        classname="error"
        content="Désolé une erreur s'est produite ..."
        stopShowMessage={stopShowMessage}
        message="errorMessage"
      />
    );
  }
}

MessageContainer.propTypes = {};
MessageContainer.defaultProps = {};
export default React.memo(MessageContainer);
