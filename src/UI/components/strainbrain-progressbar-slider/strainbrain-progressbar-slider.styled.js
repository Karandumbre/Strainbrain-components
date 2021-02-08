// vendor
import styled from 'styled-components';

export const SliderInputStyled = styled.input`
  width: 100%;
  padding: 0;
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
  }

  ::-moz-range-progress {
    background-color: ${props => props.theme.colors.dark};
    height: ${props => props.theme.spaces.space_5};
    border-radius: 100px;
  }
  ::-moz-range-track {
    background-color: ${props => props.theme.colors.lightGrey};
    height: ${props => props.theme.spaces.space_5};
    border-radius: 100px;
  }
  /* IE*/
  ::-ms-fill-lower {
    background-color: ${props => props.theme.colors.dark};
    height: ${props => props.theme.spaces.space_5};
    border-radius: 100px;
  }
  ::-ms-fill-upper {
    background-color: ${props => props.theme.colors.lightGrey};
    height: ${props => props.theme.spaces.space_5};
    border-radius: 100px;
  }
`;

export const SliderValueWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SliderValueStyled = styled.div`
  position: relative;
  left: ${props => props.whetherToMoveSlightLeft && '3%'};
`;
