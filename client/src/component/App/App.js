import React from 'react';
import PropTypes from 'prop-types';
import UsersList from '../UsersList/UsersList';
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
          <UsersList firstname={user.firstname} lastname={user.lastname} key={user.id} />
        ))}
      </main>
    </div>
  );
}

App.propTypes = {
  usersList: PropTypes.arrayOf().isRequired,
};

export default App;
