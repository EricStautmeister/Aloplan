import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Welcome } from './Welcome';

export default {
  title: 'Welcome',
  component: Welcome,
} as ComponentMeta<typeof Welcome>;

export const Primary: ComponentStory<typeof Welcome> = () => <Welcome />;
