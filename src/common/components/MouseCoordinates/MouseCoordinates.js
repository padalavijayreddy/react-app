import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';


@observer
class MouseCoordinates extends React.Component {
    @observable mouseCoordinates = {
        x: 0,
        y: 0
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    @action.bound
    handleMouseMove({ clientX, clientY }) {
        this.mouseCoordinates.x = clientX;
        this.mouseCoordinates.y = clientY;
    }

    render() {
        const {
            props: { render },
            mouseCoordinates
        } = this;
        return (render(mouseCoordinates));
    }
}
export { MouseCoordinates };
