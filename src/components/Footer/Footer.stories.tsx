import { Meta, Story } from '@storybook/react';
import React from 'react';
import {Footer} from './Footer';


export default {
    title: 'components/Footer',
    component: Footer,
    args: {
        color: 'red',
        children : 'content',
        variant: 'small'
    },
} as Meta;


export const FooterStoryTemplate = () => {
    return <Footer />;
}

FooterStoryTemplate.storyName = 'Footer';