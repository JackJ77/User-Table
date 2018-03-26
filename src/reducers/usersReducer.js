import * as types from './../store/actions/actionTypes';

export default function usersReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
     return action.users;
    case types.CREATE_USER_SUCCESS:
     return state.concat(action.user);
    case types.DELETE_USER_SUCCESS:
     return [
      ...state.slice(0, action.id),
      ...state.slice(action.id + 1)
    ];
    case types.EDIT_USER_SUCCESS:
     return [
      ...state.slice(0, action.id),
      {username: action.data.username, email: action.data.email, phone: action.data.phone},
      ...state.slice(action.id + 1)
    ];
    default:
      return state;
  }
}
