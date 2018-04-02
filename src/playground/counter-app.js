const app = document.getElementById('app');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.addNumber = this.addNumber.bind(this);
    this.subNumber = this.subNumber.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      ///Default Props
      count: 0
    }
}

componentDidMount(){
  const stringCount = localStorage.getItem('count')
  const count = parseInt(stringCount, 10);

if(!isNaN(count)) {
  this.setState(() => ({count}))
}


}
componentDidUpdate(prevProps, prevState){
  if(prevState.count !== this.state.count){
    localStorage.setItem('count', this.state.count);
  }
}

  addNumber(){
    this.setState((prevState) => {
      return {
        count: prevState.count +1
      }
    });
  }

  subNumber(e){
    e.preventDefault();
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  reset(e){
    e.preventDefault();
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
    <div>
    <h1>Count: {this.state.count}</h1>
    <button onClick={this.addNumber}>Add 1</button>
    <button onClick={this.subNumber}>Subtract 1</button>
    <button onClick={this.reset}>Reset</button>
    </div>
  );
  }
}



ReactDOM.render(<App count={69}/>, app);