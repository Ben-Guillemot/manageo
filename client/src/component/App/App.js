import React from 'react';
import PropTypes from 'prop-types';
import UsersListContainer from '../../container/UsersListContainer';
import EditModalContainer from '../../container/EditModalContainer';
import './App.scss';

function App({
  usersList,
}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Voici la liste des utilisateurs</h1>
      </header>
      <main className="App-main">
        {usersList.map((user) => (
          <UsersListContainer
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            id={user.id}
            key={user.id}
          />
        ))}
        <EditModalContainer />
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
};

export default App;
