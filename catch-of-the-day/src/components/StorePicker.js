import React, { Component } from 'react';

class StorePicker extends Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Enter A Store</h2>
        <input type="text" required placeholder="store" />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
