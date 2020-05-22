import React from 'react';
import { withKnobs, text, color } from '@storybook/addon-knobs';

import '../../../styles/tailwind.css';
import NoDataView from './';

export default {
    component: NoDataView,
    title: 'Common/NoDataView'
};

export const defaultView = () => <NoDataView />;

export const withCustomStaticBGColor = () => (
    <NoDataView
        style={{background:'green'}}
        text = {'Data Emi Ledu'}
    />
)

export const withCustomBGColorByUsingKnobs = () => {
    return (
        <NoDataView
            style={{background:color('BG','red')}}
            text={text('NoDataView','NiBondaRaaNiBonda')}
        />
    );
}

withCustomBGColorByUsingKnobs.story = {
    decorators: [withKnobs]
}
