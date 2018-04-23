import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../../store/actions/index';
import AddUser from './AddUser';
import UserForm from './UserForm';

class CreateUser extends Component {
  state = {
    name: '',
    email: '',
    valid: true,
    submited: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users.length > this.props.users.length) {
      this.setState({submited: false});
    }
  }

  handleAddUserClick = () => {
    this.setState({valid: false});
  }

  handleResetClick = () => {
    this.setState({name: '', email: ''});
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const regName = /^[a-zA-Z_ ]{1,20}$/;
    const regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailExist = this.props.users.filter(user => {
      return user.email === this.state.email;
    });

    if (regEmail.test(this.state.email) && regName.test(this.state.name) && !emailExist.length) {
      this.props.onCreate(this.state.name, this.state.email);
      this.setState({
        valid: true,
        submited: true,
        name: '',
        email: ''});
    }
  }

  render() {
    return (
      <div>
        {this.state.valid ?
        <AddUser
            submited={this.state.submited}
            usersLength={this.props.users.length}
            onClick={this.handleAddUserClick} /> :
        <UserForm
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            name={this.state.name}
            email={this.state.email}
            handleResetClick={this.handleResetClick} /> }
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onCreate: (username, email) => dispatch(actions.createUser(username, email))
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
