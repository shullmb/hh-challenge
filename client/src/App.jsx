import React, { Component } from 'react';
import logo from './assets/logo-symbol.svg';
import ListView from './components/ListView';
import DetailContainer from './components/DetailContainer';
import Loading from './components/Loading';
import Button from './components/Button';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swatches: [],
      currentSwatch: null,
      pageNumber: 1,
    }
    this.handleSwatchSelect = this.handleSwatchSelect.bind(this);
    this.selectRandomSwatch = this.selectRandomSwatch.bind(this);
    this.selectPageNumber = this.selectPageNumber.bind(this);
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

  selectRandomSwatch() {
    let index = Math.floor(Math.random() * this.state.swatches.length)
    this.setState({currentSwatch: this.state.swatches[index]})
  }

  selectPageNumber(pageNumber) {
    this.setState({pageNumber})
  }
 
  backToCatalog() {
    this.setState({currentSwatch: null})
  }

  render() {
    const swatches = this.state.swatches;
    const catalogView = swatches.length ? <ListView swatches={this.state.swatches} 
                                            currentPage={this.state.pageNumber} 
                                            handleSwatchSelect={this.handleSwatchSelect} 
                                            selectPageNumber={this.selectPageNumber } 
                                          /> : <Loading />;
    const detailView = <DetailContainer swatch={this.state.currentSwatch} backToCatalog={this.backToCatalog} /> 

    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" onClick={this.backToCatalog}/>
        </header>
        <main>
          { !this.state.currentSwatch ? catalogView : detailView }
        </main>
        <aside><Button name={'Random Color'} onClick={this.selectRandomSwatch}/></aside>
      </div>
    );
  }
}

export default App;
