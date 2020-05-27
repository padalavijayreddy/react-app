import React from 'react';
import { action } from '@storybook/addon-actions';
import { SignInButton } from '../../SignInPage/components/SignInPage';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
    component: SignInButton,
    title: 'Button/SignInButton',
};

export const defaultView = () => <SignInButton/>;

export const withCustomStaticButton = () => (
    <SignInButton 
        SignIntext = {'Submit'}
        isLoading = {true}
    />
);

export const withCustomStaticButtonUsingKnobs = () => (
    <SignInButton
        SignIntext = {text('SignInText','SignIn')}
        isLoading = {boolean('IsLoading',true)}
    />
);

withCustomStaticButtonUsingKnobs.story = {
    decorators: [withKnobs]
};
