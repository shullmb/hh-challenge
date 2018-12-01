import React, { Component } from 'react';
import logo from './assets/logo-symbol.svg';
import CatalogContainer from './components/CatalogContainer';
import DetailContainer from './components/DetailContainer';
import Loading from './components/Loading';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swatches: [],
      currentSwatch: null,
    }
    this.handleSwatchSelect = this.handleSwatchSelect.bind(this);
    this.backToCatalog = this.backToCatalog.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/swatches')
      .then( res => res.json())
      .then( swatches => this.setState({swatches}))
  }

  handleSwatchSelect(currentSwatch) {
    this.setState({currentSwatch})
  }

  backToCatalog() {
    this.setState({currentSwatch: null})
  }

  render() {
    const swatches = this.state.swatches;
    const catalogView = swatches.length ? <CatalogContainer swatches={this.state.swatches} handleSwatchSelect={this.handleSwatchSelect} /> : <Loading />;
    const detailView = <DetailContainer swatch={this.state.currentSwatch} backToCatalog={this.backToCatalog} /> 

    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" onClick={this.backToCatalog}/>
        </header>
        <main>
          { !this.state.currentSwatch ? catalogView : detailView }
        </main>
        <aside></aside>
      </div>
    );
  }
}

export default App;
