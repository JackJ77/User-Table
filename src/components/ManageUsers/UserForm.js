import React from 'react';
import ResetButton from './ResetButton';

const UserForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="form-inline my-2">
        <input
          onChange={props.handleInputChange}
          value={props.name}
          name="name"
          type="text"
          className="form-control col-sm-3 ml-2 mb-2"
          placeholder="Name..."
          id="user-name"
          autoFocus />
        <input
          onChange={props.handleInputChange}
          value={props.email}
          name="email"
          type="text"
          className="form-control col-sm-3 ml-2 mb-2"
          placeholder="E-mail..."
          id="email" />
        <button type="submit" className="btn btn-success col-sm-2 ml-2 mb-2">Submit</button>
        <ResetButton
          email={props.email}
          name={props.name} 
          handleResetClick={props.handleResetClick} />
    </form>
  );
};

export default UserForm;
