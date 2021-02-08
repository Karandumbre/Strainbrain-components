// @flow

// vendor
import React from 'react';

// styles
import {
  SliderInputStyled,
  SliderValueWrapperStyled,
  SliderValueStyled,
} from './strainbrain-progressbar-slider.styled';

type Props = {
  onChangeHandler: Function,
  data: Array<string>,
};

type State = {
  value: number,
};

class Slider extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = { value: 1 };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.onChange && this.props.onChange(this.props.data[event.target.value]);
  };

  render() {
    return (
      <div>
        <SliderInputStyled
          id="typeinp"
          type="range"
          min="0"
          max={this.props.data.length - 1}
          value={this.state.value}
          onChange={this.handleChange}
          step="1"
        />

        <SliderValueWrapperStyled>
          {this.props.data.map((value, index) => {
            const whetherToMoveSlightLeft = index >= (this.props.data.length - 1) / 2;
            return (
              <SliderValueStyled
                key={`Strainbrain-Progress-Slider-${index}`}
                whetherToMoveSlightLeft={whetherToMoveSlightLeft}
              >
                {value}
              </SliderValueStyled>
            );
          })}
        </SliderValueWrapperStyled>
      </div>
    );
  }
}

export default Slider;
