// @flow

// vendor
import React from 'react';

// styles
import { IconWrapperStyled } from './strainbrain-icon.styled';

type Props = {
  // Extra Classname to be appended to the icon
  className: string,
  // Click Handler
  handleClick: Function,
  // Font Awesome Name of the icon to be display
  name: string,
  // Color of the icon
  color?: string,
  // To display the icon in bold color
  isBold?: boolean,
  // Size of the icon
  size?: string,
};

function IconComponent(props: Props) {
  const { name, handleClick, size, color, className, isBold } = props;
  return (
    <IconWrapperStyled
      className={`fa ${name} ${className || ''}`}
      size={size}
      onClick={handleClick}
      color={color}
      isBold={isBold}
    ></IconWrapperStyled>
  );
}

IconComponent.defaultProps = {
  size: '20px',
  color: 'black',
  isBold: false,
};

export default IconComponent;
