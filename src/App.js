import React from 'react';
import PokedexHeader from './Components/PokedexHeader';
import {
  Input,
  Divider,
  Segment
} from 'semantic-ui-react'
import './App.css';


class App extends React.Component {
  constructor(props){ //internal state (local)
    super(props)
    this.state = {
      name: "Jordi",
      author: "@jordi_bru"
    }
  }

  render() {
    return (
      <div className="App">
        <PokedexHeader 
          author={this.state.author} 
          name={this.state.name}
        />
        <Segment basic>
          <Input 
            focus label='Input Form'
            placeholder='Type...'
          />
        </Segment>
        <Divider />
      </div>
    );
  }
}

export default App;
