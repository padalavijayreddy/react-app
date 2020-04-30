import React from 'react';
import { observable } from 'mobx';
import { observer,inject,Provider } from 'mobx-react';


@inject('name')
@observer
class B extends React.Component{
    @observable value
    
    onInputChange = (e) => this.value=e.target.value;
    
    render(){
        const { name } = this.props;
        return (
            <div>
              <input
              style={{background:'green'}}
              value={this.value}
              onChange={this.onInputChange}
              />
              <p>Injector Value: Value from B:{name}</p>
              <C value = {this.value}/>
            </div>
            );
    }
}



@inject('name')
@observer
class C extends React.Component{
    render(){
        const { name, value} = this.props;
        return(
            <div>
             <p>Value Of B from C: {value}</p>
             <p>Value from C:{name}</p>
            </div>
            );
    }
}


@inject('name')
@observer
class D extends React.Component{
    render(){
        const { name } = this.props;
        return(
            <div>
             <p>Value from D : {name}</p>
            </div>
            );
    }
}



@observer
class ProviderExample extends React.Component{
    render(){
        return(
            <div>
             <Provider name="Vijay">
               <B/>
               <D/>
             </Provider>
            </div>
            );
    }
}

export default ProviderExample;