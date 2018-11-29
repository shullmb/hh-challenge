import React, { Component } from 'react';
import logo from './assets/logo-symbol.svg';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swatches: [],
      currentSwatch: null
    }
  }

  componentDidMount() {
    fetch('/api/swatches')
      .then( res => res.json())
      .then( swatches => this.setState({swatches}))
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <aside><p>tes</p></aside>
        <main></main>
      </div>
    );
  }
}

export default App;
