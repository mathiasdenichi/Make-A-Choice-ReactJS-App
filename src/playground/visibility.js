const app = document.getElementById('app');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visibility: false
    }

  }
  toggle(prevState) {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility 
      } 
    })
   
  }


  render() {
     return (
       <div>
          <h1>Visibility App</h1>
          <button onClick={this.toggle}>{this.state.visibility ? 'Kadabrah' : "Abrah"}</button>
          <p>{this.state.visibility ? "Alazkazam" : ""}</p>
       </div>
     )
  }
}





ReactDOM.render(<App />, app);
