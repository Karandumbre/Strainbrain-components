import styled from 'styled-components';

export const IconWrapperStyled = styled.i`
  font-size: ${props => props.size};
  color: ${props => props.color};
  cursor: pointer;
  font-weight: ${props => props.isBold && 'bold'};
`;
