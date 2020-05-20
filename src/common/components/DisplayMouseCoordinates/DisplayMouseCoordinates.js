import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { MouseCoordinates } from '../MouseCoordinates';

@observer
class DisplayMouseCoordinates extends React.Component {

    renderMouseCoordinates = (mouseCoordinates) => {
        return (
            <div className="py-4 flex flex-col items-center bg-gray-300 w-full">
               <h2 className="text-xl font-bold">DisplayMouseCoordinates</h2>
                <div>
                    <p>The mouse position is ({mouseCoordinates.x}, {mouseCoordinates.y})</p>
                </div>
            </div>
        );
    };

    render() {
        const { renderMouseCoordinates } = this;
        return (
            <MouseCoordinates render={renderMouseCoordinates}/>
        );
    }
}

export { DisplayMouseCoordinates };
