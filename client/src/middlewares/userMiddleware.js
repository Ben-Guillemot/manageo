import {
  getAllUsers, createUser, updateUser, deleteUser,
} from '../requests/usersRequests';
import * as actions from '../actions';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ALL_USERS: {
      const response = await getAllUsers(store);
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllUsers(response.data));
      } else {
        alert(`Error: ${response.status}`);
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
      }
      //  else {
      //   alert(`Error: ${response.status}`);
      //   return;
      // }
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
      } else {
        alert(`Error: ${response.status}`);
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
      } else {
        alert(`Error: ${response.status}`);
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
