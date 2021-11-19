import React, { Component } from 'react';

class AddCharacter extends Component {
  constructor() {
    super();

    this.state = {}
  }

  handleChange = ({ name, value}) => {
    this.setState({
      [name]: value
    })
  }


  render() {
    const powerstatsArray = ['intelligence', 'strengh', 'speed', 'durability', 'power', 'combat'];
    const appearanceArray = ['gender', 'race', 'height', 'weight', 'eye', 'hair'];
    return (
      <form>
        <label>Name
          <input type="text" className="name" name="name"/>
        </label>
        <label>Image
          <input type="text" className="image" name="image"/>
        </label>
        <fieldset>PowerStats 
          { powerstatsArray.map((stats) => {
            const capitalize = stats.charAt(0).toUpperCase() + stats.slice(1);
            return (
              <label>{capitalize}
                <input type="number" className={stats} name={stats}/>
              </label>
            )
          })}
        </fieldset>
        <fieldset>Appearance
          <label>Gender
            <input type="text" className="gender" name="gender"/>
          </label>
          { appearanceArray.map((stats) => {
            const capitalize = stats.charAt(0).toUpperCase() + stats.slice(1);
            return (
              <label>{capitalize}
                <input type="number" className={stats} name={stats}/>
              </label>
            )
          })}
        </fieldset> 
        <button type="button">Add</button>
      </form>
    );
  }
}

export default AddCharacter;