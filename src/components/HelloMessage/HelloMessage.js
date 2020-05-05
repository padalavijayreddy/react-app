import React, { Component } from 'react';

class HelloMessage extends Component {
    render() {
        const { message } = this.props;
        return (<div>
            Hello {message}
        </div>);
    }
}
export { HelloMessage };
