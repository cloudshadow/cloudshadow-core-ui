import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SubscribeComponent } from '../src/index';
// import '../dist/styles.css';
// import { IButtonProps } from '../src/ButtonComponent/type';

const meta: Meta = {
  title: 'Cloud.Core.UI/Components',
  component: SubscribeComponent,
  // argTypes: {
  //   disabled: { control: 'boolean' },
  //   id: { control: 'text' },
  //   name: { control: 'text' },
  //   theme: { control: 'select', options: ['primary', 'secondary', 'danger'] },
  // },
};
export default meta;

type Story = StoryObj;
export const Subscribe: Story = {
  // args: {
  //   disabled: false,
  //   id: '',
  //   name: '',
  //   theme: 'primary',
  //   children: 'button',
  // },
};
