import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

function withToggle(WrappedCompoenent) {
    @observer
    class EnhancedComponent extends React.Component {
        @observable toggleStatus = "true";

        @action.bound
        onToggle() {
            this.toggleStatus = !this.toggleStatus;
        }

        render() {
            return (
                <WrappedCompoenent
                    onToggle={this.onToggle}
                    toggleStatus={this.toggleStatus}
                    {...this.props}
                />
            );
        }
    }

    return EnhancedComponent;
}

export { withToggle };
