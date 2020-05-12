// import React, { Component } from "react";
// import { render } from "react-dom";
// import { inject, Provider, observer } from "mobx-react";
// import { observable, action } from "mobx";

// @inject("appStore")
// @observer
// class Title extends Component {
//     render() {
//         const { title } = this.props.appStore.message;
//         return <p>Title: {title}</p>;
//     }
// }

// @inject("appStore")
// class Message extends Component {
//     onChangeTitle = () => {
//         const { onChangeTitle } = this.props.appStore;
//         onChangeTitle("Hey");
//     };
//     render() {
//         const { title } = this.props.appStore.message;
//         return (
//             <div>
//         <Title />
//         <p>{title}</p>
//         <button onClick={this.onChangeTitle}>Change title</button>
//       </div>
//         );
//     }
// }

// class LoginPage extends Component {
//     render() {
//         return (
//             <Provider appStore={appStore}>
//         <Message />
//       </Provider>
//         );
//     }
// }

// class AppStore {
//     @observable message = {
//         title: "Hi",
//     };

//     @action.bound
//     onChangeTitle(title) {
//         this.message.title = title;
//     }
// }

// const appStore = new AppStore();
// export default LoginPage;

import React, { Component } from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { observable, action, computed, reaction, autorun, set, get, trace } from 'mobx';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

class Product {
    @observable price = 0;
    @observable tax = 0;

    setPriceTaxs = () => {
        //console.log('dvdsv');
        this.price = 40;
        this.tax = 4;
        //console.log(this.price, this.tax);
    }
    // @action.bound
    setPriceTax = () => {
        //console.log('dvdsv');
        this.price = 5;
        this.tax = 6;
        //console.log(this.price, this.tax);
    }

    @action
    rahul = async() => {
        this.price = 40;
        this.tax = 30;
        this.setPriceTax();
        this.setPriceTaxs();
        this.price = 50;
        this.tax = 5;
    }

    @computed
    get total() {
        return this.price + this.tax;
    }
}

const product = new Product();

reaction(
    () => product.total,
    (total) => {
        console.log("reaction called", total);
    }
);

const { rahul } = product;
rahul();

//export default LoginPage;
/*const Comp = observer((props) => <p>{props.idi}</p>);

@observer
class Counter extends Component {
    @observable count = 1;
    @observable doubleTheCount = 2;

    @action.bound
    async updateCounts() {
        let promise = new Promise((resolve, reject) => {
            resolve("Success");
        });
        promise.then(() => {
            this.count = this.count + 1;
            this.doubleTheCount = this.doubleTheCount * 2;
        });
    }

    // @action
    update = async() => {
        await this.count++;
        this.doubleTheCount++;
        this.count
    }

    re = reaction(
        () => this.idi,
        () => {
            console.log("nene reaction called");
        }
    )

    @computed
    get idi() {
        console.log("nene computed");
        return this.count + this.doubleTheCount;
    }

    dispose = autorun(() => {
        console.log("nene autorun Called", this.count, this.doubleTheCount);
    })

    render() {
        console.log("nene render Counter");
        return (
            <div>
            <Comp idi={this.idi}/>
              <p>{this.count}</p>
              <p>{this.doubleTheCount}</p>
              <button onClick={this.update}>update Counts</button>
            </div>
        )
    }
}

// class Person {
//     @observable address = {
//         state: "Andhra Pradesh",
//         District: "Kurnool"
//     }
//     @observable name = "issac";

//     setAddress = () => {
//         this.address = ({
//             state: "Andhra Pradesh",
//             District: "Kakinada",
//         });
//         this.name = "rahul";
//     };
// }

// const person = new Person();

// reaction(
//     () => person.address,
//     () => {
//         console.log("reaction called");
//     }
// );

// autorun(() => {
//     console.log("autorun called", person.address);
// });


// person.setAddress();


// class Vijay extends Product {
//     @observable price = 10;
//     @observable tax = 20;

//     rahul = () => {
//         this.setPriceTax();
//         this.price = 50;
//         this.tax = 5;
//     }

//     @computed
//     get total() {
//         return this.price + this.tax;
//     }
// }

// const product = new Product();
// const vijay = new Vijay();
// reaction(
//     () => product.total,
//     () => {
//         console.log("reaction called");
//     }
// );

// vijay.setPriceTax();
// const { setPriceTax } = product;
// setPriceTax();
// product.setPriceTax();

@observer
class UserProfile extends Component {
    @observable userDetails = 0
    @observable second = 0;
    handleUser = () => {
        const response = 'details';
        this.userDetails = 1;
        this.second = 2;
    }
    render() {
        console.log('rendered');
        return (<div>
            <button onClick={this.handleUser}>ClickMe</button>
            <p>{this.userDetails}</p>
            <p>{this.second}</p>
        </div>);
    }
}*/

@observer class LoginPage extends React.Component {
        @observable status;
        @observable username;
        @observable password;
        @observable showPasswordError
        @observable showUsernameError

        render() {
                return (
                        <div className="flex justify-center items-center w-screen h-screen">
                        {/*<Counter/>*/}
                            <div className="w-full max-w-xs">
                                <div className="block text-gray-700 text-sm font-bold mb-2">LOGIN FORM</div>
                                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={this.onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Forgot Password?</a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs"> &copy;2020 PVR Products* pvt Lmtd. All rights reserved.</p>
            </div> <
            /div>
        );
    }
}

export default LoginPage;
