import styled, { css } from 'styled-components';

const primary = css`
  background-color: ${props => props.theme.colors.primaryButton};
  color: ${props => props.theme.colors.light};
  min-height: 40px;
  min-width: 74px;
  ${props =>
    props.showFullWidth &&
    css`
      width: 100%;
    `};
`;

export const StrainBrainButtonStyled = styled.button`
  outline: none !important;
  position: relative;
  border-style: solid;
  border-color: transparent;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.spaces.space_20};
  font-size: ${props => props.theme.fontSizes.font_14};
  font-family: ${props => props.theme.headingFont};
  border-width: ${props => props.theme.spaces.space_1};
  padding: 0 ${props => props.theme.spaces.space_20};
  font-family: ${props => props.theme.bodyFont};
  ${props => {
    switch (props.type) {
      case 'primary':
        return primary;

      default:
        return primary;
    }
  }};
`;

export const StrainBrainButtonLabelStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StrainBrainButtonIconStyled = styled.span`
  display: inline;
  float: left;
`;
