import React from 'react';
import UserItem from './UserItem';
import {connect} from 'react-redux';
import * as actions from './../../store/actions/index';
import TableUsers from './TableUsers';

class Users extends React.Component {
  state = {
    reversed: false
  }

  handleClick = () => {
    this.props.onReverse(this.state.reversed);
    this.setState(prevState => {
      return {reversed: !prevState.reversed}
    });
  }

  render() {
    let users;

    if (!this.props.users.length) {
      users = <UserItem key={0} id="id" username="name" email="email" onDelete={this.props.onDelete} />;
    } else {
      users = this.props.users.map((user, id) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            username={user.username}
            email={user.email}
            onDelete={this.props.onDelete}
            />
        );
      });
    }

    return (
      <TableUsers handleClick={this.handleClick}>
        {users}
      </TableUsers>
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
    onDelete: (id) => dispatch(actions.deleteUser(id)),
    onReverse: (reversed) => dispatch(actions.reverseUsers(reversed))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
