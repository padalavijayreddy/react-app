 import React, { Component } from 'react';
 import { render } from 'react-dom';
 import { observer } from 'mobx-react';
 import { observable, action, computed, reaction, autorun, set, get, trace } from 'mobx';
 import tw from 'tailwind.macro';
 import styled from '@emotion/styled';

 //  const propComponents = {
 //      Photo: (props) => <button onClick={()=>props.toggleFun(props.text)}>{props.text}</button>,
 //      Video: (props) => <button onClick={()=>props.toggleFun(props.text)}>{props.text}</button>
 //  }

 //  function Vijay(props) {
 //      const PropButton = propComponents[props.btnType];
 //      return <PropButton text={props.btnType} toggleFun={props.toggleFun}/>
 //  }

 const components = {
     Photo: () => <div>Rahullllll</div>,
     Video: () => <div>Vijayyyyy</div>
 };

 function Story(props) {
     const SpecificStory = components[props.storyType];
     return <SpecificStory/>;
 }

 function NumberDescriber(props) {
     let description;
     if (props.number % 2 == 0) {
         description = <strong>Even</strong>;
     }
     else {
         description = <i>Odd</i>;
     }
     return description;
 }

 const Message = () => {
     const props = { firstname: "DEv", lastname: "konda" };
     return <Greeting {...props}/>;
 };

 function Greeting(props) {
     return (
         <div>
       <strong>{props.firstname}</strong>
       <strong>{props.lastname}</strong>
       <strong>HAPPY NEW YEAR</strong>
    </div>
     );
 }



 @observer
 class LoginPage extends React.Component {
     @observable status;
     @observable username;
     @observable password;
     @observable showPasswordError
     @observable showUsernameError
     @observable btnType = 'Photo'

     render() {
         return (
             <div className="flex justify-center items-center w-screen h-screen">
             {/*<Story storyType="Photo"/>*/}
             {/*<NumberDescriber number="13"/>*/}
             <Message/>
             {/*<Vijay btnType={this.btnType} toggleFun={(textType) => this.btnType = (textType === 'Photo')?'Video':'Photo'}/>*/}
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
 