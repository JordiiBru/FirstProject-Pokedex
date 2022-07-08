import React from 'react';
import PokedexHeader from './Components/PokedexHeader';
import {
  Input,
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
    this.onChange = this.onChange.bind(this)
  }

  onChange(event, data){
    console.log(data.value)
    this.setState({
      name: data.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <PokedexHeader 
          author={this.state.author} 
          name={this.state.name}
        />
        <Segment basic>
          <Input 
            focus label='Input Form'
            onChange={this.onChange}
            value={this.state.name}

          />
        </Segment>
      </div>
    );
  }
}

export default App;
