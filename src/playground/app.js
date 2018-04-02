const app = document.getElementById('app');

///App Root Structure
///Root Needs to be a class becuase of State
class App extends React.Component {
  ///Bind to Props
  constructor(props) {
    super(props);
    ///Bind Functions to props
    this.pickOption = this.pickOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.removeOption = this.removeOption.bind(this);
    ///Define State
    this.state = {
      options:[]
    }
  }

  componentDidMount(){

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

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log(json)
    }

  }
  componentWillUnmount(){
    console.log('Unmounted')
  }

  ///Pick and Option at Random
  pickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNum];
    if(this.state.options.length > 0) {
      alert(pick);
    }else {
      alert('Please enter options');
    }
  }

  ///Add Option
  addOption(option){
    if(!option){
      return 'Please Enter an Option'
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option has already been entered. Please enter a new option.'
    }
    this.setState((prevState)=> ({options: prevState.options.concat(option)}));
  }

  ///Remove all Options
  removeAll(e) {
    e.preventDefault();
    this.setState(() => ({options: []}));
  }

  removeOption(optionToRemove){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
  }

  //render root
  render() {
    ///Define Vars
    const title = 'The Indecision App';
    const subtitle = 'Put Your Life in the Hands of an App'
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Choice pickOption={this.pickOption}/>
      <Input addOption={this.addOption}/>
      <Options options={this.state.options} removeAll={this.removeAll} removeOption={this.removeOption}/>
      </div>
    );
  }
}

///Header Component

const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}



///Stateless Functional Component
const Choice = (props) => {
  return (
    <div>
      <button onClick={props.pickOption}>What should I do?</button>
    </div>
  );
}


///Input Text and Add and Remove
class Input extends React.Component {
  ///Overwrtie and Bind to Props
  constructor(props){
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  ///Reference from Props Parent. Overwrite within;
  addOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    e.target.elements.option.value = ''

    this.setState(() => ({error}));

  }
  render(){
    return (
      <div>
      <hr />
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.addOption}>
      <input id='input' type='text' name='option' placeholder='Enter Choice Here'/>
      <button>Add Option</button>
      </form>
      </div>
    )
  }
}

///Ol parent for options
const Options = (props) => {
  return (
    <div>
    <button onClick={props.removeAll}>Remove All</button>
      {
        props.options.map((option)=> <Option key={option} optionText={option} removeOption={props.removeOption} />)
      }
    </div>
  )
}

///Option Text
const Option = (props) => {
  return(
    <div>
      {props.optionText}
      <button key={props.optionText} onClick={(e)=> {
        props.removeOption(props.optionText)
      }}>Remove</button>
    </div>
  );
}


ReactDOM.render(<App />, app);