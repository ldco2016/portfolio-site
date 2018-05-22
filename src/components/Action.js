import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      Click={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
);

export default Action;
