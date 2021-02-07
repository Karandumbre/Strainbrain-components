import styled from 'styled-components';

export const StrainbrainComponentWrapperStyled = styled.div`
  margin-bottom: ${props => props.theme.spaces.space_24};
`;

export const StrainbrainStyled = styled.input`
  font-family: ${props => props.theme.bodyFont};
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  max-width: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.light};
  border-color: ${props =>
    props.isError ? props.theme.colors.inputErrorBorderColor : props.theme.colors.inputBorderColor};
  border-radius: ${props => props.theme.spaces.space_4};
  color: ${props => props.theme.colors.primaryText};
`;

export const StrainbrainErrorMessageStyled = styled.div`
  font-family: ${props => props.theme.bodyFont};
  margin-top: ${props => props.theme.spaces.space_5};
  color: ${props => props.theme.colors.errorHelperTextColor};
`;

export const StrainbrainLabelStyled = styled.label`
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.colors.primaryText};
  margin-bottom: ${props => props.theme.spaces.space_10};
  display: inline-block;
`;

export const StrainbrainLabelChildrenStyled = styled.div`
  display: flex;
`;
