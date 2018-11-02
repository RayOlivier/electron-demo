import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

// const { ipcRenderer } = window.require("electron")
//this works in electron but not chrome. it's part of how you communicate between the front and back end

class App extends Component {
  constructor() {
    super()

    this.state = {
      num: 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({ num: this.state.num + 1 })
  }

  decrement() {
    this.setState({ num: this.state.num - 1 })
  }

  render() {
    // console.log(ipcRenderer)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Electron Demo</p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          Num: {this.state.num}
          <button onClick={this.increment}>Plus 1</button>{" "}
          <button onClick={this.decrement}>Minus 1</button>
        </header>
      </div>
    )
  }
}

export default App
