import React, { useState, useEffect } from 'react';
import UsersList from '../UsersList/UsersList';
import { getAllUsers } from '../../requests/usersRequests';
import './App.scss';

function App() {
  const [usersList, setUsersList] = useState([]);

  const sortArray = (x, y) => {
    if (x.lastname < y.lastname) { return -1; }
    if (x.lastname > y.lastname) { return 1; }
    return 0;
  };

  useEffect(() => {
    const request = async () => {
      const response = await getAllUsers();
      if (response.status === 200) {
        setUsersList(response.data);
      } else {
        console.log('error');
      }
    };
    request();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Voici la liste des utilisateurs</h1>
      </header>
      <main className="App-main">
        {usersList.sort(sortArray).map((user) => (
          <UsersList firstname={user.firstname} lastname={user.lastname} key={user.id} />
        ))}
      </main>
    </div>
  );
}

export default App;
