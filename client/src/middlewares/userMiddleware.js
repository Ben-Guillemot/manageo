import {
  getAllUsers, createUser, updateUser, deleteUser,
} from '../requests/usersRequests';
import * as actions from '../actions';

/**
 * middleware used to execute actions out of application like http requests
 * @param {*} store redux store
 * @returns
 */
const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ALL_USERS: {
      const response = await getAllUsers(store);
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllUsers(response.data));
      } else {
        store.dispatch(actions.actionToggleMessage('errorMessage', true));
        return;
      }
      return;
    }

    case actions.CREATE_USER: {
      const { user } = store.getState();

      const { firstname, lastname, email } = user;

      const userDatas = { firstname, lastname, email };

      const response = await createUser(userDatas);
      if (response.status === 201) {
        store.dispatch(actions.actionResetUserInformations());
        store.dispatch(actions.actionRequestAllUsers());
        store.dispatch(actions.actionToggleMessage('createSuccess', true));
      } else {
        store.dispatch(actions.actionToggleMessage('errorMessage', true));
        return;
      }
      return;
    }

    case actions.UPDATE_USER: {
      const { user } = store.getState();

      const { firstname, lastname, email } = user;

      const userDatas = { firstname, lastname, email };

      const response = await updateUser(user.id, userDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetUserInformations());
        store.dispatch(actions.actionRequestAllUsers());
        store.dispatch(actions.actionToggleMessage('updateSuccess', true));
      } else {
        store.dispatch(actions.actionToggleMessage('errorMessage', true));
        return;
      }
      return;
    }

    case actions.DELETE_USER: {
      const { user } = store.getState();

      const response = await deleteUser(user.id);
      if (response.status === 200) {
        store.dispatch(actions.actionResetUserInformations());
        store.dispatch(actions.actionRequestAllUsers());
        store.dispatch(actions.actionToggleMessage('deleteSuccess', true));
      } else {
        store.dispatch(actions.actionToggleMessage('errorMessage', true));
        return;
      }
      return;
    }

    default: {
      next(action);
    }
  }
};

export default userMiddleware;
