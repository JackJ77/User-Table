import React from 'react';

const ResetButton = (props) => {
  return (
    <div>
    {props.email||props.name ?
      <span
        onClick={props.handleResetClick}
        className="reset-button">Reset fields
      </span> :
      null}
    </div>
  );
};

export default ResetButton;
