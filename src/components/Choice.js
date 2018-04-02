import React from 'react';

const Choice = (props) =>
  (
    <div>
      <button className='big-button' onClick={props.pickOption}>What should I do?</button>
    </div>
  );


export default Choice;