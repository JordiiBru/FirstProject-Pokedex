import React from 'react';
import PokedexHeader from './Components/PokedexHeader';
import './App.css';


class App extends React.Component {
  constructor(props){ //internal state (local)
    super(props)
    this.state = {
      name: "Jordi"
    }
  }
  render() {
    return (
      <div className="App">
        <PokedexHeader 
          author={"@jordi_bru"} 
          name={this.state.name}
        />
      </div>
    );
  }
}

export default App;
