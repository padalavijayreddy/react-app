import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

function withScreenSizeDetectors(WrappedCompoenent) {
    @observer
    class EnhancedComponent extends React.Component {
        @observable deviceType = "";

        componentDidMount() {
            this.setDeviceType();
            window.addEventListener("resize", this.setDeviceType);
        }

        setDeviceType = () => {
            const { isDesktop, isTablet } = this;
            this.deviceType = (isDesktop()) ? "Desktop" : (isTablet()) ? "Tablet" : "Mobile";
        }

        isMobile = () => window.innerWidth < 576;
        isTablet = () => window.innerWidth >= 576 && window.innerWidth < 992;
        isDesktop = () => window.innerWidth >= 992;

        render() {
            return <WrappedCompoenent deviceType={this.deviceType} {...this.props}/>;
        }
    }
    return EnhancedComponent;
}

export { withScreenSizeDetectors };
