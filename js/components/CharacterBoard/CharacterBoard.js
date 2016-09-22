import React, { Component } from 'react';
import Relay from 'react-relay';
import _ from 'lodash';
import Character from './Character';
import './CharacterBoard.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function pickSame(obja, objb) {
  var res = {};
  if (!obja || !objb) return null;
  _.forEach(obja, (value, key) => {
    if ( obja[key] instanceof Object
      && objb[key] instanceof Object
      && obja[key]['name'] === objb[key]['name']) {
      res[key] = obja[key]['name'];
    } else {
      if (obja[key] === objb[key]) {
        res[key] = value;
      }
    }
  });
  return res;
}

class CharacterBoard extends Component {
  state = {
    leftCharacter: undefined,
    rightCharacter: undefined,
  }

  handleLeftChange = (event, index, leftCharacter) => this.setState({leftCharacter});
  handleRightChange = (event, index, rightCharacter) => this.setState({rightCharacter});

  render() {
    const { leftCharacter, rightCharacter } = this.state;
    const sameProp = pickSame(leftCharacter, rightCharacter);
    console.log('sameProp:', sameProp);
    return (
      <div className="container">
        <div className="left">
          <Character
            character={this.state.leftCharacter}
            allPeople={this.props.allPeople}
            handleChange={this.handleLeftChange}
          />
        </div>
        <div className="middle">
          <div> Relations </div>
          { (leftCharacter && rightCharacter) && (!sameProp || Object.getOwnPropertyNames(sameProp).length === 0 )?
            'No Same Filed' : _.map(sameProp, (value, key) => {
              return (<div key={key}>same {key}: {value ? value : 'none'}</div>);
            })}

        </div>
        <div className="right">
          <Character
          character={this.state.rightCharacter}
          allPeople={this.props.allPeople}
          handleChange={this.handleRightChange}
          />
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(CharacterBoard, {
  fragments: {

  },
});