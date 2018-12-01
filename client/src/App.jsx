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
    this.handleSwatchSelect = this.handleSwatchSelect.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/swatches')
      .then( res => res.json())
      .then( swatches => this.setState({swatches}))
  }

  handleSwatchSelect(currentSwatch) {
    console.log(currentSwatch)
    this.setState({currentSwatch})
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
        </header>
        <main>
          {this.state.swatches.length ? <CatalogContainer swatches={this.state.swatches} handleSwatchSelect={this.handleSwatchSelect}/> : <h3>Loading swatches</h3>}
          <DetailContainer swatch={this.state.currentSwatch} handleSwatchSelect={this.handleSwatchSelect}/> 
        </main>
        <aside></aside>
      </div>
    );
  }
}

export default App;
