import styled, { css } from 'styled-components';
import { HORIZONTAL, VERTICAL } from '../../../constants/strainbrain-stepper.constants';

export const StepperWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: ${props => props.direction === VERTICAL && props.theme.spaces.space_20};
  ${props =>
    props.direction === HORIZONTAL &&
    css`
      width: 23%;
      flex-direction: column;
      justify-content: center;
    `}
`;

const handleStepperDistance = stepperCount => {
  switch (stepperCount) {
    case 2:
      return '296%';
    case 3:
      return '125%';
    case 4:
      return '70%';
    case 5:
      return '60%';
    default:
      return '30%';
  }
};

export const StepperWrapper = styled.div`
  ${props =>
    props.direction === HORIZONTAL &&
    css`
      display: flex;
      justify-content: space-between;
    `}
`;

export const StepperStepNumberWrapperStyled = styled.div`
  border-radius: 50%;
  text-align: center;
  width: ${props => (props.direction === VERTICAL ? '30px' : '40px')};
  height: ${props => (props.direction === VERTICAL ? '30px' : '40px')};
  padding: ${props =>
    props.direction === VERTICAL ? props.theme.spaces.space_4 : props.theme.spaces.space_3};
  font-size: 95%;
  border: ${props =>
    props.direction === HORIZONTAL &&
    `${props.theme.spaces.space_1} solid ${props.theme.colors.lightGrey}`};
  margin-bottom: ${props => props.direction === HORIZONTAL && props.theme.spaces.space_20};
  ${props =>
    props.isSelected
      ? css`
          border: ${props.theme.spaces.space_1} solid ${props.theme.colors.activeBorderColor};
          color: #fff;
        `
      : css`
          border: ${props.theme.spaces.space_1} solid ${props => props.theme.colors.lightGrey};
        `}
  background: ${props => (props.isSelected ? props.stepColor : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepperDescriptionStyled = styled.div`
  ${props =>
    props.direction === VERTICAL &&
    css`
      margin-left: ${props => props.theme.spaces.space_20};
      padding-bottom: ${props => props.theme.spaces.space_3};
    `}
  font-weight: ${props => props.isActive && 'bold'};
`;

export const StepperNumberdividerLine = styled.div`
  background-color: ${props => props.theme.colors.primaryText};
  position: absolute;
  ${props =>
    props.direction === VERTICAL
      ? css`
          height: ${props => props.theme.spaces.space_18};
          width: ${props => props.theme.spaces.space_1};
          top: 100%;
          left: 11%;
        `
      : css`
          height: ${props => props.theme.spaces.space_4};
          border-radius: ${props => props.theme.spaces.space_36};
          top: 25%;
          left: 70%;
        `}
  width: ${props => props.direction !== VERTICAL && handleStepperDistance(props.stepperCount)};
`;

export const StepperContentWrapperStyled = styled.div`
  text-align: center;
`;
