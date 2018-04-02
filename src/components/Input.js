import React from 'react';

export default class Input extends React.Component {
  ///Overwrtie and Bind to Props
  state = {
    error: undefined
  };


  // constructor(props){
  //   super(props);
  //   this.addOption = this.addOption.bind(this);
  // }

  ///Reference from Props Parent. Overwrite within;
addOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    e.target.elements.option.value = ''
    this.setState(() => ({error}));
  }


  render(){
    return (
      <div className='widget-header'>
      {this.state.error && <p className='widget--error'>{this.state.error}</p>}
      <form className='widget--form' onSubmit={this.addOption}>
      <input className='widget--input' id='input' type='text' name='option' placeholder='Enter Choice Here'/>
      <button className='button button--add'>Add Option</button>
      <button className='button button--remove' onClick={this.props.removeAll}>Remove All</button>
      </form>
      </div>
    )
  }
}
