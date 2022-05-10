import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionRequestAllUsers, actionToggleModal } from '../actions';
import App from '../component/App/App';

function AppContainer() {
  const dispatch = useDispatch();

  /**
   * get usersList from redux store
   */
  const { usersList } = useSelector((state) => state.user);

  /**
   * function to open createModal
   */
  const handleCreateButtonClick = () => {
    dispatch(actionToggleModal('createModal', true));
  };

  /**
   * Function to get an array sorted by lastname ASC
   * @param {string} x nothing to put here
   * @param {string} y nothing to put here
   * @returns array sorted
   */
  const sortArray = (x, y) => {
    if (x.lastname.toLowerCase() < y.lastname.toLowerCase()) { return -1; }
    if (x.lastname.toLowerCase() > y.lastname.toLowerCase()) { return 1; }
    return 0;
  };

  // Use to sort usersList array
  const usersListSorted = usersList.sort(sortArray);

  useEffect(() => {
    // this action use userMiddleware
    dispatch(actionRequestAllUsers());
  }, []);
  return (
    // return App component with props
    <App usersList={usersListSorted} handleCreateButtonClick={handleCreateButtonClick} />
  );
}

export default React.memo(AppContainer);
