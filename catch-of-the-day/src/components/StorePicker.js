import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  
  myInput = React.createRef();

  
  goToStore = event => {
    // Stop form from submitting
    event.preventDefault();
    
    // Get text from input
    const storeName = this.myInput.value.value;
    
    // Change page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Enter A Store</h2>
        
        <input 
          type="text" 
          ref={this.myInput}
          required 
          placeholder="store name" 
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
