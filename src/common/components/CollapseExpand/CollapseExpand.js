import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { withToggle } from '../../hocs/withToggle';

class CollapseExpand extends React.Component {

    render() {
        const { onToggle, toggleStatus } = this.props;
        return (
            <div className="py-4 flex flex-col items-center bg-gray-400 w-full">
                <h2 className="text-xl font-bold">CollapseExpand</h2>
                <div className="flex">
                    <p>Sample Shopping List:</p>
                    <button className="px-2 py-1 bg-blue-500 rounded text-white focus:outline-none" onClick={onToggle}>Collapse
                    {(toggleStatus)?
                    "":<div className="flex flex-col">
                        <p>
                            Eggs
                        </p>
                        <p>
                            Bread
                        </p>
                    </div>}
                    </button>
                </div>    
            </div>
        );
    }
}

export default withToggle(CollapseExpand);
