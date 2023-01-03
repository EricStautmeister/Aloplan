import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

export const Primary: ComponentStory<typeof ProgressBar> = () => <ProgressBar />;
