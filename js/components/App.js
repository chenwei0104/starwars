import React, { Component } from 'react';
import Relay from 'react-relay';
import CharacterBoard from './CharacterBoard';
import MessageBoard from './MessageBoard';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Star Wars</h2>
        </div>
        <CharacterBoard people={this.props.viewer.people}/>
        <MessageBoard />
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on PeopleConnection {
        people {
          id
          name
        }
      }
    `,
  },
});
