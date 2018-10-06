import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';


class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    
    // do not mutate state. Make a copy.
    // 1. Make a copy of the existing state
    const fishes = { ...this.state.fishes };

    // 2. Add our new fish to fishes
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fishes object to state
    this.setState({
      fishes: fishes
    });
  };
  
  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = key => {
    
    // Take a copy of state
    const order = {...this.state.order};

    // Add to the order or update the number in order if already in order
    order[key] = order[key] + 1 || 1;

    // Call setState to update the state object
    this.setState({
      order: order
    })
  };

  render () {
    return (
      <div className="catch-of-the-day">
        
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key} 
                index={key}
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        
        <Order 
          fishes={this.state.fishes}
          order={this.state.order}
          
          // Can be used to spread an object and pass the entire object, but best not to use unless you know you need ALL of the object, otherwise overkill
          // { ...this.state }
        />
        
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;