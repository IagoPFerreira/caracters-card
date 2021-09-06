import React, { Component } from 'react';
import fetcher from '../services/fetch';

class HeroList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      response: ''
    }
  }

  resulter = () => {
    // fetcher()
    fetcher.then((result) => console.log(result))
    // console.log(fetcher);
  }
  // fetcher = () => {
  //   // const token = 4322221571228242
  //   fetch('https://superheroapi.com/api/4322221571228242/644/connections')
  //   // fetch('https://www.dnd5eapi.co/api/spells/acid-arrow/')
  //   // fetch('https://akabab.github.io/superhero-api/api')
  //     // .then((respo) => respo.json())
  //     .then((res) => console.log(res))
  //     .catch((er) => console.log(er))
  //     // .then((res) => this.setState({
  //     //   isLoading: false,
  //     //   response: res
  //     // }))
  // }

  render() {
    this.resulter();
    const { isLoading, response } = this.state;
    return (
      <>
        { isLoading ? <p>Oi</p> : console.log(response) }
      </>
    );
  }
}

export default HeroList;