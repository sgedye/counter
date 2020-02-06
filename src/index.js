import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor() {
      super()
      this.state = { count: 0 }
      this.inc = this.inc.bind(this)
      this.dec = this.dec.bind(this)
      this.multi = this.multi.bind(this)
      this.zero = this.zero.bind(this)
  }
  inc() {
      this.setState(prevState => {
          return { count: prevState.count + 1 }
      })
  }
  dec() {
      this.setState(prevState => {
          return { count: prevState.count - 1 }
      })
  }
  multi() {
    this.setState(prevState => {
      return { count: prevState.count * 2 }
    })
  }
  zero() {
    this.setState(prevState => { return { count: 0 } })
  }
  render() {
      return (
          <div>
              <h2>{this.state.count}</h2>
              <div className="buttons">
                  <button onClick={this.zero}>Clear</button>
                  <button onClick={this.inc}>Increment</button>
                  <button onClick={this.dec}>Decrement</button>
                  <button onClick={this.multi}>x2</button>
              </div>
          </div>
      )
  }
}
ReactDOM.render(<App />, document.getElementById("root"))