import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Character extends Component {
  render() {
    const { allPeople, character, handleChange }= this.props;
    console.log(character);
    return (
      <div>
        <SelectField
          value={character}
          style={{textAlign: 'left'}}
          onChange={handleChange}
          floatingLabelText="Select a character">
          {allPeople.people.map(person =>
            <MenuItem key={person.id} value={person} primaryText={person.name} />
          )}
        </SelectField>
        {character ? (
          <div>
            <div> Birth Year: {character.birthYear} </div>
            <div> Gender: {character.gender} </div>
            <div> Hair Color: {character.hairColor} </div>
            <div> Homeworld: {character.homeworld.name} </div>
            <div> Height: {character.height} </div>
            <div> Mass: {character.mass || 'unknown'} </div>
            <div> Skin Color: {character.skinColor} </div>
            <div> Species: {character.species ? character.species.name : 'none'} </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Character;