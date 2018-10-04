import React, { Component } from 'react';
import { formatPrice } from "../helpers";

class Fish extends Component {
  render() {
    
    const image = this.props.details.image;
    const name = this.props.details.name;
    const price = this.props.details.price;
    const desc = this.props.details.desc;
    const status = this.props.details.status;

    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">{name}</h3>
        <span className="price">{formatPrice(price)}</span>
        <p>{desc}</p>
        <button>Add to Cart</button>
      </li>
    );

  }
}

export default Fish;