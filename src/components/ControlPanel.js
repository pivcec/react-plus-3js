import React, { Component } from 'react';
import styled from 'styled-components';

const ControlPanelContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;
  border: 1px solid #000000;
  padding: 1em;
  font-size: 10px;
  align-content: center;
`;

const Title = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  flex: 50%;
  text-align: center;
  font-size: 2em;
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
        <Title>
          {`${propertyToChange} = ${currentValueOfPropertyToChange}`}
        </Title>
        <ButtonContainer>
          <Button
            onClick={() => handlePropertyChange(
              'add',
              propertyToChange,
              currentValueOfPropertyToChange,
              amountToChangePropertyBy,
            )}
          >
            +
          </Button>
          <Button
            onClick={() => handlePropertyChange(
              'subtract',
              propertyToChange,
              currentValueOfPropertyToChange,
              amountToChangePropertyBy,
            )}
          >
            -
          </Button>
        </ButtonContainer>
      </ControlPanelContent>
    );
  }
}

export default ControlPanel;
