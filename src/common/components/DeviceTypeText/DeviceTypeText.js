import React from 'react';
import { withScreenSizeDetectors } from '../../hocs/withScreenSizeDetectors';

class DeviceTypeText extends React.Component {

    render() {
        const { deviceType } = this.props;

        return (
            <div className="py-4 flex flex-col items-center bg-gray-300 w-full">
                <h2 className="text-xl font-bold">DeviceTypeText</h2>
                <p>Device Type:{ deviceType }</p>
            </div>
        );
    }
}

export default withScreenSizeDetectors(DeviceTypeText);
