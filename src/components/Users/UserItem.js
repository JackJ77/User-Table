import React from 'react';

const UserItem = (props) => {
    return (
      <tr>
         <td>
            {props.id}
         </td>
         <td>
            {props.username}
         </td>
         <td>
            {props.email}
         </td>
         <td>
            <span onClick={() => {props.onDelete(props.id)}} className="close">&times;</span>
         </td>
      </tr>
    );
};

export default UserItem;
