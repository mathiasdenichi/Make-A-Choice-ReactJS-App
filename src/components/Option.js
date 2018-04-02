import React from 'react';

///Option Text
const Option = (props) => (

    <div className='option'>
      <p className='option--text option--text-wrap'>{props.count} {props.optionText} </p>
      <button className='button-small option--text' key={props.optionText} onClick={(e)=> {
        props.removeOption(props.optionText)
      }}>Remove</button>

    </div>

    )

export default Option;