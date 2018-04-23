import React from 'react';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaCheck from 'react-icons/lib/fa/check';
import GoIssueOpened from 'react-icons/lib/go/issue-opened';

const AddUser = (props) => {
  const message = () => {
    if (props.usersLength >= 10) {
      return (
        <span className="font-weight-bold ml-5">
            <GoIssueOpened className="issue-icon" />You can't add new user because of the limit.
        </span>
      );
    } else if ((props.usersLength < 10) && props.submited) {
      return (
        <span className="font-weight-bold ml-5">
          <FaCheck className="success-icon" />You have successfuly added an user.
        </span>
      );
    } else {
      return null;
    }
  }

  return(
      <div>
      <button
        disabled={props.usersLength >= 10}
        onClick={props.onClick}
        type="button"
        className="font-weight-bold btn btn-outline-success my-3 px-4">
          <FaPlusCircle className="plus-icon" /> Add user
      </button>
        {message()}
      </div>
  );
};

export default AddUser;
