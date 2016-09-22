import React, { Component } from 'react';
import Relay from 'react-relay';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CharacterBoard from './CharacterBoard';
import MessageBoard from './MessageBoard';
import './App.css';

class App extends React.Component {
  state = {
    personId: 'cGVvcGxlOjE=',
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Star Wars</h2>
          </div>
          <CharacterBoard allPeople={this.props.allPeople} />
          <MessageBoard />
        </div>
      </MuiThemeProvider> 
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    allPeople: () => Relay.QL`
      fragment on PeopleConnection {
        people {
          id,
          name,
          birthYear,
          gender,
          hairColor,
          height,
          mass,
          skinColor,
          homeworld {
            name
          }
          species {
            name
          },
        }
      }
    `,
    /*
    person: () => Relay.QL`
      fragment on Person {
        name,
        birthYear,
        gender,
        hairColor,
        height,
        mass,
        skinColor,
        homeworld,
        species,
      }
    `,*/
  },
});
