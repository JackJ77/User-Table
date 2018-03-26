import React from 'react';
import UserItem from './UserItem';
import {connect} from 'react-redux';
import * as actions from './../store/actions/index';

class Users extends React.Component {
  render() {
    const users = this.props.users.map((user, id) => {
      return (
        <UserItem
          key={id}
          id={user.id}
          username={user.username}
          email={user.email}
          phone={user.phone}
          onDelete={this.props.onDelete}
          />
      );
    });

    return (
      <div className="list-group">
        {users}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (id) => dispatch(actions.deleteUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
