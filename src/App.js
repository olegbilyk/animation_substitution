import React, { Component } from 'react'
import logo from './logo.svg'
import AnimationSubstitution from './AnimationSubstitution'
import './App.css'

class App extends Component {
  state = {
    startAnim: false,
  }

  startAnimation = () => {
    this.setState({ startAnim: true })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AnimationSubstitution startAnim={this.state.startAnim} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={this.startAnimation}>
          !!! Start Animation !!!
        </button>
      </div>
    )
  }
}

export default App
