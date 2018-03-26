import axios from 'axios';
import * as types from './actionTypes';


export function loadUsersSuccess(users) {
  return {type: types.LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {
  return dispatch => {
    axios.get(`http://jsonplaceholder.typicode.com/users`).then(users => {
      dispatch(loadUsersSuccess(users.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export const createUserSuccess = (user) => {
  return {
    type: types.CREATE_USER_SUCCESS, user
  };
};

export const createUser = (username, email, phone) => {
    return dispatch => {
      const data = { username, email, phone };
      axios.post('http://jsonplaceholder.typicode.com/users', data)
        .then(res => {
          console.log(res);
          dispatch(createUserSuccess(res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
};

export const deleteUserSuccess = (id) => {
  return {
    type: types.DELETE_USER_SUCCESS, id
  };
};

export const deleteUser = (id) => {
    return dispatch => {
      axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          console.log(res);
          dispatch(deleteUserSuccess(res.data.id));
        })
        .catch(err => {
          console.log(err);
        });
    };
};

export const editUserSuccess = (id, data) => {
  return {
    type: types.EDIT_USER_SUCCESS, id, data
  };
};

export const editUser = (id, username, email, phone) => {
    return dispatch => {
      const data = {username, email, phone};
      axios.patch(`http://jsonplaceholder.typicode.com/users/${id}`, data)
        .then(res => {
          console.log(res);
          dispatch(editUserSuccess(res.data.id, res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
};
