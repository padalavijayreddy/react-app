import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { withToggle } from '../../hocs/withToggle';

@observer
class ViewEditToggle extends React.Component {
    @observable contextText = "Click on the edit button to start editing";
    @observable button = "Edit";

    @action.bound
    onChange({ target: { value } }) {
        this.contextText = value;
    }

    render() {
        console.log(this.props);
        const { onToggle, toggleStatus } = this.props;
        const { contextText } = this;
        return (
            <div className="py-4 flex flex-col items-center bg-gray-300 w-full px-2">
                <h2 className="text-xl font-bold">ViewEditToggle</h2>
                <div className="flex items-center">
                {(toggleStatus)?
                <p>{contextText}</p>:
                <input onChange={this.onChange} value={contextText} />}
                <button className="ml-2 px-2 py-1 bg-blue-500 rounded text-white focus:outline-none" onClick={onToggle}>{(toggleStatus)?"Edit":"Cancel"}</button>
                </div>
            </div>
        );
    }
}

export default withToggle(ViewEditToggle);
