import React from 'react';
import { CollapseExpand } from '../../components/CollapseExpand';
import { DeviceTypeText } from '../../components/DeviceTypeText';
import { ViewEditToggle } from '../../components/ViewEditToggle';
import { DisplayMouseCoordinates } from '../../components/DisplayMouseCoordinates';


class PracticeAdvancedConceptRoute extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center my-8">
            <h1 className="text-3xl font-bold mb-2">HOC's Usage</h1>
            <ViewEditToggle/>
            <CollapseExpand/>
            <DeviceTypeText/>
            <h1 className="text-3xl font-bold mb-2 mt-4">Render Props Usage</h1>
            <DisplayMouseCoordinates />
            </div>
        );
    }
}

export { PracticeAdvancedConceptRoute };
