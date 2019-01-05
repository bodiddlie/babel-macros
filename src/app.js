import React from 'react';
import bailIfNull from './bail-if-null.macro';

class Macro extends React.Component {
  render() {
    return (
      <div>
        <h1>Macro</h1>
        <Other />
        <Other something="other" />
      </div>
    );
  }
}

function Other(props) {
  bailIfNull(props.something);

  return <div>Wasn't Null - {props.something}</div>;
}

export default Macro;
