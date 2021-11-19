import React, { Component } from 'react';
import { fetcherId } from '../services/fetch';
import '../styles/details.css';
import Loading from './Loading';
import characters from "../data/characters";

class CharacterDetails extends Component {
  constructor() {
    super()

    this.state = {
      character: null,
    }
  }

  componentDidMount() {
    const { location: { pathname }} = this.props;
    fetcherId(pathname.split('/')[1])
      .then((result) => {
        const { weight, height} = result.appearance
        if (weight.length === 2 && height.length === 2) {
          height.splice(0, 1)
          weight.splice(0, 1)
        }
        this.setState({ character: result })
      });
  }

  createNewId = () => {
    const result = characters.length + 1;
    this.setState({
      id: result,
    });
  };

  addCharacter = () => {
    const storage = localStorage.getItem('characters');

    localStorage.setItem('characters', [...storage, this.state]);
  }

  showDetails = () => {
    const { character: { name, image: { url }, powerstats, appearance } } = this.state;
    console.log(characters.length);

    return (
      <section className="character">
        <h1 className="name">{ name }</h1>
        <section className="details">
          <img className="thumbnail" src={ url } alt={ name }/>
          <ul className="stats"> PowerStats
            {Object.entries(powerstats).map(([key, value]) => <li>{key}: {value}</li>)}
          </ul>
          <ul className="stats"> Appearance
            { Object.entries(appearance).map(([key, value]) => <li>{key}: {value}</li>)}
          </ul>
        </section>
      </section>
    )
  }


  render() {
    const { character } = this.state;

    return (
      <>
        { character ? this.showDetails() : <Loading /> }
      </>
    );
  }
}

export default CharacterDetails;