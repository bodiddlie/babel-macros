import React from 'react';

function Other(props) {
  if (!props.something) {
    return null;
  }

  return <div>Wasn't Null - {props.something}</div>;
}
