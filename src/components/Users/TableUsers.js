import React from 'react';

const TableUsers = (props) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead onClick={props.handleClick} className="thead-light">
          <tr>
            <th scope="col">LP</th>
            <th scope="col">USER</th>
            <th scope="col">EMAIL</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
