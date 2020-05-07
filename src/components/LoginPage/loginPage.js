import React from 'react';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

let message = observable({
    title: "Foo",
    author: {
        name: "Michel"
    },
    likes: ["John", "Sara"]
});

const { author } = message
autorun(() => {
    console.log(author.name);
});
message.author.name = 'vijay';
message.author = { name: 'nene' };


@observer
class LoginPage extends React.Component {
    @observable status;
    @observable username;
    @observable password;
    @observable showPasswordError
    @observable showUsernameError

    changeItems() {
        const { name } = message.author;
        if (name === 'Foo')
            message.author.name = "Vijay";
        else if (name === 'Vijay')
            message.author.name = "Booo";
        else
            message.author.name = "Foo";
    }

    render() {
        return (
            <div onClick={this.changeItems} className="flex justify-center items-center w-screen h-screen">
            <div>{message.author.name}</div>
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
            </div>
        </div>
        );
    }
}

export default LoginPage;
