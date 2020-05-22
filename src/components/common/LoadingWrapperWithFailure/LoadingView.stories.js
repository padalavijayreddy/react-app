import React from 'react';
import { withKnobs, color, number } from '@storybook/addon-knobs';

import '../../../styles/tailwind.css';
import LoadingView from './LoadingView';

export default {
    component: LoadingView,
    title: 'Common/LoadingView'
};

export const defaultView = () => <LoadingView />;

export const withCustomStaticFillColor = () => (
    <LoadingView
        fill={'orange'}
        width={50}
        height={50}
   />
)

export const withCustomFillColorByUsingKnobs = () => {
    return (
        <LoadingView
            fill = { color('FillColor', 'black') }
            width = { number('Width', 50) }
            height = { number('Height', 50) }
        />
    );
}

withCustomFillColorByUsingKnobs.story = {
    decorators: [withKnobs]
}
