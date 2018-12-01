import React, { Component } from 'react';
import logo from './assets/logo-symbol.svg';
import CatalogContainer from './components/CatalogContainer';
import DetailContainer from './components/DetailContainer';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swatches: [],
      currentSwatch: {r: 10, g:10, b: 200}
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
        <main>
          {this.state.swatches.length ? <CatalogContainer swatches={this.state.swatches} /> : <h3>Loading swatches</h3>}
          {/* {this.state.swatches.length ? <DetailContainer swatch={this.state.currentSwatch} /> : <h3>Loading swatch</h3>} */}
        </main>
        <aside></aside>
      </div>
    );
  }
}

export default App;
