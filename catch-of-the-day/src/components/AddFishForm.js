import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  
  static propTypes = {
    addFish: PropTypes.func
  };
  
  createFish = e => {
    e.preventDefault();

    const fish = {
      nameRef: this.nameRef.value.value,
      priceRef: parseFloat(this.priceRef.value.value), 
      statusRef: this.statusRef.value.value,
      descRef: this.descRef.value.value,
      imageRef: this.imageRef.value.value
    };
    this.props.addFish(fish);
    // refresh the form
    e.currentTarget.reset();
    
  }
  
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        
        <input 
          name="name" ref={this.nameRef} 
          type="text" 
          placeholder="name" 
        />
        
        <input 
          name="price" ref={this.priceRef} 
          type="text" 
          placeholder="price" 
        />
        
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        
        <textarea 
          name="desc" ref={this.descRef}  
          placeholder="desc" 
        />
        
        <input 
          name="image" ref={this.imageRef} 
          type="text" 
          placeholder="image" 
        />

        <button type="submit">Add fish</button>
      </form>
    );
  }
}

export default AddFishForm;