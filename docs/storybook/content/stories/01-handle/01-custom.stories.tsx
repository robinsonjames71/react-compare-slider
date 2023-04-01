import type { Meta, Story } from '@storybook/react';
import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import { argTypes, args } from '../config';

export default {
  title: 'Handles/CustomComponent',
  component: ReactCompareSlider,
  args,
  argTypes,
} as Meta;

export const CustomComponent: Story = (props) => {
  const CustomHandle: React.FC = () => {
    return (
      <div
        style={{
          width: props.portrait ? '100%' : '0.25rem',
          height: props.portrait ? '0.25rem' : '100%',
          backgroundImage: `linear-gradient(
            ${props.portrait ? 'to left' : 'to bottom'},
            rgba(255, 0, 0, 1) 0%,
            rgba(255, 154, 0, 1) 10%,
            rgba(208, 222, 33, 1) 20%,
            rgba(79, 220, 74, 1) 30%,
            rgba(63, 218, 216, 1) 40%,
            rgba(47, 201, 226, 1) 50%,
            rgba(28, 127, 238, 1) 60%,
            rgba(95, 21, 242, 1) 70%,
            rgba(186, 12, 248, 1) 80%,
            rgba(251, 7, 217, 1) 90%,
            rgba(255, 0, 0, 1) 100%
        )`,
          boxShadow: `0 0 0 2px rgba(148,0,211,1),
        0 0 2px 4px rgba(75,0,130,1),
        0 0 0 6px rgba(0,0,255,1),
        0 0 0 8px rgba(0,255,0,1),
        0 0 0 10px rgba(255,255,0,1),
        0 0 0 12px rgba(255,127,0,1),
        0 0 0 14px rgba(255,0,0,1)`,
          cursor: 'pointer',
        }}
      />
    );
  };

  return (
    <ReactCompareSlider
      {...props}
      handle={<CustomHandle />}
      itemOne={
        <ReactCompareSliderImage
          src="https://github.com/nerdyman/stuff/raw/main/libs/react-compare-slider/demo-images/space-needle-1.jpg"
          alt="Image one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="https://github.com/nerdyman/stuff/raw/main/libs/react-compare-slider/demo-images/space-needle-2.jpg"
          alt="Image two"
        />
      }
      style={{ width: '100%', height: '100vh' }}
    />
  );
};

CustomComponent.args = {};
