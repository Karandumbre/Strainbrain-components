// vendor
import React, { Component, Node } from 'react';

// styles
import {
  StepperWrapperStyled,
  StepperWrapper,
  StepperStepNumberWrapperStyled,
  StepperDescriptionStyled,
  StepperNumberdividerLine,
  StepperContentWrapperStyled,
} from './strainbrain-stepper.styled';

// components
import { StrainbrainIcon } from './../../';

type Props = {
  direction: string,
  currentStepNumber: number,
  steps: Array<{
    label: string,
    bgColor: string,
    iconConfig: {
      name: string,
    },
    content: string | Node,
  }>,
  stepColor: string,
};

type State = {
  step: Array<{
    description: {
      label: string,
      bgColor: string,
      iconConfig: {
        name: string,
      },
      content: string | Node,
    },
    highlighted: boolean,
    selected: boolean,
    completed: boolean,
  }>,
};

export default class StarinbrainStepper extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      steps: [],
    };
  }

  componentDidMount() {
    const { steps, currentStepNumber } = this.props;

    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      stepObj.completed = false;
      return stepObj;
    });

    const currentSteps = this.updateStep(currentStepNumber, stepsState);

    this.setState({
      steps: currentSteps,
    });
  }

  componentDidUpdate(prevProps) {
    const { steps } = this.state;
    const currentSteps = this.updateStep(this.props.currentStepNumber, steps);

    if (prevProps.currentStepNumber !== this.props.currentStepNumber)
      this.setState({
        steps: currentSteps,
      });
  }

  updateStep(stepNumber, steps) {
    const newSteps = [...steps];
    let stepCounter = 0;

    while (stepCounter < newSteps.length) {
      // Current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      }
      // Past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }
      // Future step
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }

    return newSteps;
  }

  renderSteps = () => {
    const { direction, stepColor } = this.props;
    const { steps } = this.state;
    return steps.map((step, index) => {
      const { label, bgColor, iconConfig } = step.description;
      return (
        <StepperWrapperStyled key={index} direction={direction}>
          <StepperStepNumberWrapperStyled
            direction={direction}
            isSelected={step.selected}
            stepColor={bgColor || stepColor}
          >
            {step.completed ? (
              <span>&#10003;</span>
            ) : iconConfig ? (
              <StrainbrainIcon
                {...iconConfig}
                color={step.highlighted && step.selected && 'white'}
              />
            ) : (
              index + 1
            )}
          </StepperStepNumberWrapperStyled>
          <StepperDescriptionStyled direction={direction} isActive={step.highlighted}>
            {label}
          </StepperDescriptionStyled>
          {index !== steps.length - 1 && (
            <StepperNumberdividerLine direction={direction} stepperCount={steps.length} />
          )}
        </StepperWrapperStyled>
      );
    });
  };

  renderContent = () => {
    const { steps } = this.state;
    return steps.map(step => {
      const {
        highlighted,
        selected,
        description: { content },
      } = step;

      return highlighted && selected && content;
    });
  };

  render() {
    const { direction } = this.props;

    return (
      <>
        <StepperWrapper direction={direction}>{this.renderSteps()}</StepperWrapper>
        <StepperContentWrapperStyled>{this.renderContent()}</StepperContentWrapperStyled>
      </>
    );
  }
}
