import React from 'react';
import { StrainbrainSlider } from './../UI';

export const stepsArray = [
  {
    label: 'Recreational',
    bgColor: '#ff5b5a',
    iconConfig: {
      name: 'fa-whatsapp',
    },
    content: (
      <div style={{ minHeight: '150px' }}>
        <h1>In the Recreational block</h1>
        <div style={{ margin: '20px auto 40px', width: '80%' }}>
          <StrainbrainSlider
            data={['Very Mild', 'Mild', 'Moderate', 'Strong', 'Very Strong']}
            onChange={e => console.log(`value Clicked - ${e}`)}
          />
        </div>
      </div>
    ),
  },
  {
    label: 'Flavours',
    bgColor: '#efc384',
    iconConfig: {
      name: 'fa-instagram',
    },
    content: (
      <div style={{ minHeight: '150px' }}>
        <h1>In the Flavours block</h1>{' '}
      </div>
    ),
  },
  {
    label: 'Strength',
    bgColor: '#8acbc1',
    iconConfig: {
      name: 'fa-snowflake-o',
    },
    content: (
      <div style={{ minHeight: '150px' }}>
        <h1>In the Strength block</h1>{' '}
      </div>
    ),
  },
];
