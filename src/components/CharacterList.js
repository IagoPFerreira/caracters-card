import React, { Component } from 'react';
import fetcher from '../services/fetch';
import CaracterCard from './CharacterCard';
import "../styles/style.css";
import { Link } from 'react-router-dom';
import Loading from './Loading';


class CharacterList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      characterList: '',
    }
  }

  results = () => {
    const { characterList } = this.state;

    const local = localStorage.getItem('characters');
    if (local) this.setState({ characterList: local })

    if (characterList) return true;
    fetcher.then((result) => {
      this.setState({
        isLoading: false,
        characterList: result,
      })
    })
  }

  renderHeroes = () => {
    const { characterList } = this.state;

    return (
      <section className="caracthers-list">
        {
        characterList
          .map((character) => (
            <Link to={`/${character.id}`} className="characters-card">
              <CaracterCard key={ character.id } character={ character }/>
            </Link>
          ))
      }
      </section>
    )
  }

  render() {
    this.results();
    const { isLoading } = this.state;
    return (
        <>
          <Link to="/form" className="form">
            <button type="button" onClick>Add character</button>
          </Link>
          { isLoading ? <Loading /> : this.renderHeroes() } 
        </>
    );
  }
}

export default CharacterList;