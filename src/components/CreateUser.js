import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../store/actions/index';

class CreateUser extends React.Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePhoneChange = (event) => {
    this.setState({phone: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCreate(this.state.name, this.state.email, this.state.phone);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="user-name">User Name</label>
              <input
                onChange={this.handleNameChange}
                value={this.state.name}
                type="text"
                className="form-control"
                id="user-name" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleEmailChange}
                value={this.state.email}
                type="email"
                className="form-control"
                id="email" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="phone">Phone</label>
              <input
                onChange={this.handlePhoneChange}
                value={this.state.phone}
                type="number"
                className="form-control"
                id="phone" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
          </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreate: (username, email, phone) => dispatch(actions.createUser(username, email, phone))
  };
};

export default connect(null, mapDispatchToProps)(CreateUser);
