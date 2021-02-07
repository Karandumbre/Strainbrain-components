// @ flow

// vendor
import React from 'react';

// styles
import {
  StrainbrainComponentWrapperStyled,
  StrainbrainStyled,
  StrainbrainErrorMessageStyled,
  StrainbrainLabelStyled,
  StrainbrainLabelChildrenStyled,
} from './strainbrain-input.styled';

type Props = {
  // OnChange handler
  onChange: Function,
  // Name for the Input Element
  name?: string,
  // Placeholder of the input field
  placeholder?: string,
  // type of the input field
  type?: string,
  // Value for the Input Field
  value?: string | object,
};

const Input = (props: Props) => {
  const { type, placeholder, name, value, onChange, error, label, children } = props;
  const newType = type.split(':')[1];

  return (
    <StrainbrainComponentWrapperStyled>
      {label && <StrainbrainLabelStyled for={name}>{label}</StrainbrainLabelStyled>}
      <StrainbrainLabelChildrenStyled>
        <StrainbrainStyled
          isError={error}
          type={newType || type}
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        {children}
      </StrainbrainLabelChildrenStyled>

      {error && <StrainbrainErrorMessageStyled>{error}</StrainbrainErrorMessageStyled>}
    </StrainbrainComponentWrapperStyled>
  );
};

Input.defaultProps = {
  name: '',
  value: '',
  type: 'text',
  placeholder: '',
};

export default Input;
