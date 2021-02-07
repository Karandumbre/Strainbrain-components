// vendor
import React, { Component } from 'react';
import { withTheme } from 'styled-components';

// constants
import { HORIZONTAL } from './../../../constants/strainbrain-stepper.constants';
import { stepsArray } from '../../../constants/stepper-dummy';

// styles
import {
  StepperContainerHorizontalWrapperStyled,
  StrainbrainButtonLabelStyled,
  StepperButtonWrapperStyled,
  StrainbrainRightButtonLabelStyled,
  StepperContainerHorizontalTitleWrapperStyled,
  StepperPoweredByTextStyled,
} from './strainbrain-stepper-container.styled';

// components
import { StrainbrainStepper, StrainbrainButton } from './../../';

// types
type State = {
  currentStep: Number,
};

class StrainbrainStepperContainer extends Component<State> {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
    };
  }

  handleClick(clickType) {
    const { currentStep } = this.state;
    let newStep = currentStep;
    clickType === 'next' ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= stepsArray.length) {
      this.setState({
        currentStep: newStep,
      });
    }
  }

  render() {
    const { currentStep } = this.state;

    return (
      <>
        <StepperContainerHorizontalWrapperStyled>
          <StepperContainerHorizontalTitleWrapperStyled>
            Select your preferred psychoactive strength
          </StepperContainerHorizontalTitleWrapperStyled>
          <StrainbrainStepper
            direction={HORIZONTAL}
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
            stepColor="purple"
          />
          <StepperButtonWrapperStyled>
            <StrainbrainButton
              onClick={() => this.handleClick()}
              leftIconconfig={{
                name: 'fa-angle-left',
                color: 'white',
                isBold: true,
              }}
            >
              <StrainbrainButtonLabelStyled>Back</StrainbrainButtonLabelStyled>
            </StrainbrainButton>

            <StrainbrainButton
              onClick={() => this.handleClick('next')}
              rightIconconfig={{
                name: 'fa-angle-right',
                color: 'white',
                isBold: true,
              }}
            >
              <StrainbrainRightButtonLabelStyled>
                Get Recommendation
              </StrainbrainRightButtonLabelStyled>
            </StrainbrainButton>
          </StepperButtonWrapperStyled>
          <StepperPoweredByTextStyled>
            Powered by&nbsp;
            <img src={require('./../../../assets/images/logo.png')} alt="logo" width="30px" />
            &nbsp;Strainbrain
          </StepperPoweredByTextStyled>
        </StepperContainerHorizontalWrapperStyled>
      </>
    );
  }
}

export default withTheme(StrainbrainStepperContainer);
