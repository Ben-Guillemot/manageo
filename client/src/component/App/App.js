import React from 'react';
import PropTypes from 'prop-types';
import UsersListContainer from '../../container/UsersListContainer';
import ModalContainer from '../../container/ModalContainer';
import MessageContainer from '../../container/MessageContainer';
import './App.scss';

function App({
  usersList,
  handleCreateButtonClick,
}) {
  return (
    <div className="App">
      <header className="App__header">
        <h1>Liste des membres</h1>
      </header>
      <main className="App__main">
        <MessageContainer />
        {usersList.map((user) => (
          <UsersListContainer
            firstname={user.firstname}
            lastname={user.lastname.toUpperCase()}
            email={user.email}
            id={user.id}
            key={user.id}
          />
        ))}
        <ModalContainer />
        <button type="button" className="App__main-button" onClick={handleCreateButtonClick}>Ajouter un membre</button>
      </main>
    </div>
  );
}

App.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleCreateButtonClick: PropTypes.func.isRequired,
};

export default App;
