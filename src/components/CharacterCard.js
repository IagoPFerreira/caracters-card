import React, { Component } from 'react';

class CaracterCard extends Component {
  render() {
    const { character: { name, image } } = this.props;
    return (
      <section className="card">
        <h1 className="name">{name}</h1>
        <img className="thumbnail" src={ image.url } alt={ name } />
      </section>
    );
  }
}

export default CaracterCard;