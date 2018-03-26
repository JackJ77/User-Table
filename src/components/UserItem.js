import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = (props) => {
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-3 lead">
            {props.username}
          </div>
          <div className="col-3 lead">
            {props.email}
          </div>
          <div className="col-3 lead">
            {props.phone}
          </div>
          <div className="col-3 lead text-center">
            <Link to={`/users/${props.id}`}>
              <button className="btn btn-primary mr-3">edit</button>
            </Link>
            <button onClick={() => {props.onDelete(props.id)}} className="btn btn-primary">delete</button>
          </div>
        </div>
      </div>
    );
};

export default UserItem;
