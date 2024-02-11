import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MyButton, MyButtonInterface } from './MyButton';


export default {
    title: 'components/MyButton',
    component: MyButton,
    args: {
        color: 'red',
        children : 'content',
        variant: 'small'
    },
} as Meta<MyButtonStoryProps>;

type MyButtonStoryProps = Pick<MyButtonInterface, 'color' | 'children' | 'variant'>

export const MyButtonStoryTemplate: Story<MyButtonStoryProps> = ({...args}) => {
    return <MyButton {...args}/>;
}

MyButtonStoryTemplate.storyName = 'MyButton';