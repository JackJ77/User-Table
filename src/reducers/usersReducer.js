import * as types from './../store/actions/actionTypes';

export default function usersReducer(state = [], action) {
  switch(action.type) {

    case types.LOAD_USERS:
     return action.users;

    case types.CREATE_USER:
      if (!action.user.id) {
        action.user.id = state.reduce((acc, user) => {
          return Math.max(acc, user.id);
        }, 0);
      }
      action.user.id ++;
     return state.concat(action.user);

    case types.DELETE_USER:
      const users = state.filter(user => user.id !== action.id);
      return users;

    case types.REVERSE_USERS:
      const reverseUsers = state;
      if (action.reversed) {
        reverseUsers.sort((a,b) => (
          a.id - b.id
        ));
      } else {
        reverseUsers.reverse();
      }
      return reverseUsers;

    default:
      return state;
  }
}
