import React from "react";
import logo from "../../logo.svg";

function Page1() {
  return (
      <div className="flex justify-center flex-col items-center bg-gray-800 h-screen">
        <img src={logo} className="App-logo w-1/2" alt="logo" />
        <h1 className="text-white text-lg">Page1</h1>
      </div>
      );
}

export default Page1;
