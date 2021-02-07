// @flow

// vendor
import React, { Node } from 'react';

// styles
import {
  StrainBrainButtonStyled,
  StrainBrainButtonLabelStyled,
  StrainBrainButtonIconStyled,
} from './strainbrain-button.styled';

// components
import { StrainbrainIcon } from './../../';

type Props = {
  children: string | Node,
  onClick: Function,
  // Configuration to display left icon
  leftIconconfig?: {
    name: string,
    handleClick: Function,
    color: string,
  },
  // Configuration to display right icon
  rightIconconfig?: {
    name: string,
    handleClick: Function,
    color: string,
  },
};

export default function SprinqueButton(props: Props) {
  const { children, onClick, leftIconconfig, rightIconconfig } = props;

  const handleClick = evt => {
    if (onClick) {
      evt && evt.stopPropagation();
      onClick(evt);
    }
  };

  return (
    <StrainBrainButtonStyled {...props} onClick={handleClick}>
      {!!leftIconconfig && (
        <StrainBrainButtonIconStyled>
          <StrainbrainIcon {...leftIconconfig} />
        </StrainBrainButtonIconStyled>
      )}
      <StrainBrainButtonLabelStyled>{children}</StrainBrainButtonLabelStyled>
      {!!rightIconconfig && (
        <StrainBrainButtonIconStyled>
          <StrainbrainIcon {...rightIconconfig} />
        </StrainBrainButtonIconStyled>
      )}
    </StrainBrainButtonStyled>
  );
}
