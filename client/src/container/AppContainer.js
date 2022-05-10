import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionRequestAllUsers } from '../actions';
import App from '../component/App/App';

function AppContainer() {
  const dispatch = useDispatch();

  const { usersList } = useSelector((state) => state.user);

  const sortArray = (x, y) => {
    if (x.lastname < y.lastname) { return -1; }
    if (x.lastname > y.lastname) { return 1; }
    return 0;
  };

  const usersListSorted = usersList.sort(sortArray);

  useEffect(() => {
    dispatch(actionRequestAllUsers());
  }, []);
  return (
    <App usersList={usersListSorted} />
  );
}

AppContainer.propTypes = {};
AppContainer.defaultProps = {};
export default React.memo(AppContainer);