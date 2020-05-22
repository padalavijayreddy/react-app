import React from 'react';
import { action } from '@storybook/addon-actions';
import { SignInButton } from '../../SignInPage/components/SignInPage/signInPageStyle';
import { withKnobs } from '@storybook/addon-knobs';



export default {
    component: SignInButton,
    title: 'Button',
};

export const defaultView = () => <SignInButton/>;

export const withCustomStaticButton = () => (
               <SignInButton 
                  {}
               />
          );

export const withCustomStaticButtonUsingKnobs = () => (
    <SignInButton/>
);

withCustomStaticButtonUsingKnobs.story = {
    decorators: [withKnobs]
}

