import React from 'react';
import Option from './Option';

const Options = (props) =>
  (
    <div>
      {
        props.options.map((option, index)=> <Option key={option} optionText={option} removeOption={props.removeOption} count={index + 1}/>)
      }
    </div>
  )


export default Options