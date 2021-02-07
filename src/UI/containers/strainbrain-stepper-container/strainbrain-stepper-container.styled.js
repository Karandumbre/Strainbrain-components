import styled from 'styled-components';

export const StrainbrainButtonLabelStyled = styled.div`
  margin-left: ${props => props.theme.spaces.space_10};
`;

export const StepperContainerHorizontalWrapperStyled = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: ${props => props.theme.spaces.space_30};
  margin: ${props => props.theme.spaces.space_36} auto;
  padding: ${props => props.theme.spaces.space_30};
  width: 90%;
`;

export const StepperContainerVerticalWrapperStyled = styled.div`
  border: 1px solid ${props => props.theme.colors.primaryText};
  border-radius: ${props => props.theme.spaces.space_3};
  margin: ${props => props.theme.spaces.space_36} auto;
  padding: ${props => props.theme.spaces.space_30};
  width: 15%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StepperButtonWrapperStyled = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StrainbrainRightButtonLabelStyled = styled.div`
  margin-right: ${props => props.theme.spaces.space_10};
`;

export const StepperContainerHorizontalTitleWrapperStyled = styled.div`
  font-size: ${props => props.theme.fontSizes.font_34};
  margin-bottom: ${props => props.theme.spaces.space_30};
  text-align: center;
  font-weight: bold;
`;

export const StepperPoweredByTextStyled = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 20px;
  white-space: pre;
`;
