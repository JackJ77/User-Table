import axios from 'axios';
import * as types from './actionTypes';

export const reverseUsers = (reversed) => {
  return {type: types.REVERSE_USERS, reversed};
}

export const loadUsersSuccess = (users) => {
  return {type: types.LOAD_USERS_SUCCESS, users};
};

export const loadUsers = () => {
  return dispatch => {
    axios.get(`http://jsonplaceholder.typicode.com/users`).then(users => {
      dispatch(loadUsersSuccess(users.data));
    }).catch(error => {
      throw(error);
    });
  };
};

export const createUser = (username, email) => {
  const user = {username, email};
  return {type: types.CREATE_USER, user};
};

export const deleteUser = (id) => {
  return {
    type: types.DELETE_USER, id
  };
};
