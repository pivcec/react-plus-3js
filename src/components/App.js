import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import Animation from './Animation';
import styled from 'styled-components';

const ControlPanelWrapper = styled.div`
  display: flex;
`;

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cameraPositionZ: 0.5,
      boxGeometryX: 0.5,
      boxGeometryY: 0.5,
      boxGeometryZ: 0.5,
      meshRotationX: 0.01,
      meshRotationY: 0.01,
    };
  }

  handlePropertyChange = (
    addOrSubtract,
    propertyToChange,
    currentValueOfPropertyToChange,
    amountToChangePropertyBy
  ) => {
    if (addOrSubtract === 'add') {
      const num = currentValueOfPropertyToChange + amountToChangePropertyBy;
      this.setState({
        [propertyToChange]: Math.round((currentValueOfPropertyToChange + amountToChangePropertyBy) * 100) / 100,
      });
    } else {
      this.setState({
        [propertyToChange]: Math.round((currentValueOfPropertyToChange - amountToChangePropertyBy) * 100) / 100,
      });
    }
  };

  render() {
    const {
      cameraPositionZ,
      boxGeometryX,
      boxGeometryY,
      boxGeometryZ,
      meshRotationX,
      meshRotationY,
    } = this.state;
    return (
      <div>
        <ControlPanelWrapper>
          <ControlPanel
            handlePropertyChange={this.handlePropertyChange}
            propertyToChange={'cameraPositionZ'}
            currentValueOfPropertyToChange={cameraPositionZ}
            amountToChangePropertyBy={0.1}
          />
          <ControlPanel
            handlePropertyChange={this.handlePropertyChange}
            propertyToChange={'boxGeometryX'}
            currentValueOfPropertyToChange={boxGeometryX}
            amountToChangePropertyBy={0.1}
          />
          <ControlPanel
            handlePropertyChange={this.handlePropertyChange}
            propertyToChange={'boxGeometryY'}
            currentValueOfPropertyToChange={boxGeometryY}
            amountToChangePropertyBy={0.1}
          />
          <ControlPanel
            handlePropertyChange={this.handlePropertyChange}
            propertyToChange={'boxGeometryZ'}
            currentValueOfPropertyToChange={boxGeometryZ}
            amountToChangePropertyBy={0.1}
          />
          <ControlPanel
            handlePropertyChange={this.handlePropertyChange}
            propertyToChange={'meshRotationX'}
            currentValueOfPropertyToChange={meshRotationX}
            amountToChangePropertyBy={0.01}
          />
          <ControlPanel
            handlePropertyChange={this.handlePropertyChange}
            propertyToChange={'meshRotationY'}
            currentValueOfPropertyToChange={meshRotationY}
            amountToChangePropertyBy={0.01}
          />
        </ControlPanelWrapper>
        <Animation
          cameraPositionZ={cameraPositionZ}
          boxGeometryX={boxGeometryX}
          boxGeometryY={boxGeometryY}
          boxGeometryZ={boxGeometryZ}
          meshRotationX={meshRotationX}
          meshRotationY={meshRotationY}
        />
      </div>
    );
  }
}

export default App;
