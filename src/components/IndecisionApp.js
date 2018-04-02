import React from 'react';
import Input from './Input';
import Options from './Options';
import Choice from './Choice';
import Header from './Header';
import OptionModal from './OptionModal'

///Root Needs to be a class becuase of State
 export default class App extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  }
  ///Bind to Props
  // constructor(props) {
  //   super(props);
  //   ///Bind Functions to props
  //   this.pickOption = this.pickOption.bind(this);
  //   this.addOption = this.addOption.bind(this);
  //   this.removeAll = this.removeAll.bind(this);
  //   this.removeOption = this.removeOption.bind(this);
  //   ///Define State
  //   this.state = {
  //     options:[]
  //   }
  // }

  componentDidMount = () => {

    try {

      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() =>({options}))
      }

    } catch(e) {
        console.log(e);
    }


  }

  componentDidUpdate = (prevProps, prevState) =>{
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log(json)
    }

  }
  componentWillUnmount = () =>{
    console.log('Unmounted')
  }

  ///Pick and Option at Random
  pickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNum];
    if(this.state.options.length > 0) {
      this.setState(() => ({selectedOption: pick}))
    }else {
      alert('Please enter options');
    }
  }

  ///Add Option
  addOption = (option) =>{
    if(!option){
      return 'Please Enter an Option'
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option has already been entered. Please enter a new option.'
    }
    this.setState((prevState)=> ({options: prevState.options.concat(option)}));
  }

  ///Remove all Options
  removeAll = (e) => {
    e.preventDefault();
    this.setState(() => ({options: []}));
  }

  removeOption = (optionToRemove) =>{
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
  }

  closeWindow = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({selectedOption: undefined}))

  }

  //render root
  render() {
    ///Define Vars
    const title = 'Make a Choice!';
    const subtitle = 'Put Your Life in the Hands of an App'
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
        <div className='container'>
          <Choice pickOption={this.pickOption}/>
          <Input addOption={this.addOption} removeAll={this.removeAll}/>
          <Options options={this.state.options}  removeOption={this.removeOption}/>
          <OptionModal selectedOption={this.state.selectedOption} closeWindow={this.closeWindow}/>
        </div>
      </div>
    );
  }
}