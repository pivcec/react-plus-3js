import React, { Component } from 'react';
import styled from 'styled-components';

const ControlPanelContent= styled.div`
  flex-grow: 1;
  flex-basis: 0;
  border: 1px solid #000000;
  display: inline-block;
  padding: 1em;
  font-size: 10px;  
`;

class ControlPanel extends Component {
  render() {
    const {
      handlePropertyChange,
      propertyToChange,
      currentValueOfPropertyToChange,
      amountToChangePropertyBy,
    } = this.props;
    return (
      <ControlPanelContent>
        {`${propertyToChange} = ${currentValueOfPropertyToChange}`}
        <div onClick={() => handlePropertyChange(
          'add',
          propertyToChange,
          currentValueOfPropertyToChange,
          amountToChangePropertyBy,
        )}>
          +
        </div>
        <div onClick={() => handlePropertyChange(
          'subtract',
          propertyToChange,
          currentValueOfPropertyToChange,
          amountToChangePropertyBy,
        )}>
          -
        </div>
      </ControlPanelContent>
    );
  }
}

export default ControlPanel;
