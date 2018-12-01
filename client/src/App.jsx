import React, { Component } from 'react';
import logo from './assets/logo-symbol.svg';
import CatalogContainer from './components/CatalogContainer';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swatches: [],
      currentSwatch: null
    }
  }

  componentDidMount() {
    fetch('/api/v1/swatches')
      .then( res => res.json())
      .then( swatches => this.setState({swatches}))
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
        </header>
        <aside></aside>
        <main>
          {this.state.swatches.length ? <CatalogContainer swatches={this.state.swatches} /> : <h3>Loading swatches</h3>}
        </main>
      </div>
    );
  }
}

export default App;
