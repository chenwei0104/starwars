import React, { Component } from 'react';
import Relay from 'react-relay';
import './CharacterBoard.css';

class CharacterBoard extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          left
        </div>
        <div className="middle">
          middle
        </div>
        <div className="right">
          right
        </div>
      </div>
    );
  }
}
export default Relay.createContainer(CharacterBoard, {
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