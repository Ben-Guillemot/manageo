import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionRequestAllUsers, actionToggleModal } from '../actions';
import App from '../component/App/App';

function AppContainer() {
  const dispatch = useDispatch();

  const { usersList } = useSelector((state) => state.user);

  const handleCreateButtonClick = () => {
    dispatch(actionToggleModal('createModal', true));
  };

  const sortArray = (x, y) => {
    if (x.lastname.toLowerCase() < y.lastname.toLowerCase()) { return -1; }
    if (x.lastname.toLowerCase() > y.lastname.toLowerCase()) { return 1; }
    return 0;
  };

  const usersListSorted = usersList.sort(sortArray);

  useEffect(() => {
    dispatch(actionRequestAllUsers());
  }, []);
  return (
    <App usersList={usersListSorted} handleCreateButtonClick={handleCreateButtonClick} />
  );
}

AppContainer.propTypes = {};
AppContainer.defaultProps = {};
export default React.memo(AppContainer);
