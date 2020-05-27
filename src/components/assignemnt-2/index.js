import React from 'react';
//import './car-list.css';
import { IoMdArrowBack } from "react-icons/io";
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';

//Global Declaration

//const rootElement = document.getElementById("root");


//CLASSES

const Button = styled.button(
    props => ({
        backgroundColor: (props.state === "Start") ? "green" : "red"
    })
);

class CarsList extends React.Component {
    state = {
        carIds: [1]
    };

    onAddCar = () => {
        const prevStatecarIds = this.state.carIds.slice(0);
        const lengthOfCarids = prevStatecarIds.length;
        const lastCarId = prevStatecarIds[lengthOfCarids - 1];
        const newCarId = lastCarId + 1;
        prevStatecarIds.push(newCarId);
        if (isNaN(prevStatecarIds[0])) {
            prevStatecarIds[0] = 1;
        }
        this.setState({
            carIds: prevStatecarIds
        });
    }
    renderCarsList = () => {
        return this.state.carIds.map(eachCarId => {
            return <Car key={eachCarId} id={eachCarId}
           removeCarFromCarsList ={this.OnRemoveCar}/>;
        });
    };

    OnRemoveCar = (event) => {
        const Index = this.state.carIds.findIndex(item =>
            item === Number(event.target.id)
        );
        let remainingCars = this.state.carIds.filter((item, index) =>
            index !== Index,
        );
        this.setState({
            carIds: remainingCars
        });
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="flex flex-col justify-center align-center">
              <button className="flex justify-start items-center h-12 bg-black text-white text-lg w-full" type="button" onClick={this.goBack}><IoMdArrowBack/><b>Go Back</b></button>
              <div className="flex justify-end items-end m-12">
               <button className="bg-blue-800 text-white w-20" onClick={this.onAddCar}>Add Car</button>
              </div>
              <div className="flex flex-col justify-center items-center">
               <div className="flex flex-col bg-blue-300 text-black w-1/2">{this.renderCarsList()}</div>
              </div>
            </div>
        );
    }
}


class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Stopped",
            speed: 0,
            engine: "Start",
        };
    }

    OnstartStop = () => {
        if (this.state.status === "Stopped") {
            this.setState({
                engine: "Stop",
                status: "Running",
                speed: 0
            });
        }
        else {
            this.setState({
                engine: "Start",
                status: "Stopped",
                speed: 0
            });
        }
    }

    onAccelerate = () => {
        if (this.state.status === "Running") {
            this.setState({
                speed: this.state.speed += 10
            });
        }
    }

    onApplyBrake = () => {
        if (this.state.speed > 0) {
            this.setState({
                speed: this.state.speed -= 10
            });
        }
    }

    displayStartStopBtn = () => {
        if (this.state.status === "Running") {
            return "Stop";
        }
        return 'Start';
    }

    render() {

        return (
            <div className="h-48 w-full flex flex-col justify-around">
             <span className="flex justify-center w-20 bg-blue-800 text-white"><b>CarIds:</b>{this.props.id}</span>
             <div className="flex justify-around">
              <Button state={this.state.engine} className="border-solid border-2 w-24 border-blue-800" onClick={this.OnstartStop}><b>{this.displayStartStopBtn()}</b></Button>
               <button className="border-solid border-2 w-24 border-blue-800 bg-red-700 text-white" onClick={this.props.removeCarFromCarsList} id={this.props.id}>Remove</button>
             </div>
             <div className="flex justify-center">
              <span className="flex justify-center w-full"><b>Status:</b>{this.state.status==="Running" ? this.state.speed >0 ?`Running with speed ${this.state.speed} KMPH`:"Running":"stopped"}</span>
             </div>
             <div className="flex justify-around">
              <button className="border-solid border-2 w-32 border-indigo-800 hover:bg-white" onClick={this.onAccelerate}><b>Accelerate</b></button>
              <button className="border-solid border-2 w-32 border-purple-800 hover:bg-black hover:text-white" onClick={this.onApplyBrake}><b>Deaccelerate</b></button>
             </div>
            </div>
        );
    }
}


export default withRouter(CarsList);










//displayStatusText(){
//   if(this.state.carStatus === "Running"?this.state.speed>0?`Running with speed  ${this.state.speed} Kmph`:"Running":"Stopped");
//}

//onStartOrStop = (props) => {
//   if(this.state.carStatus === "Stopped"){
//    this.setState({
//         carStatus:"Running",
/*           speed:0
            });
        }
        else{
            this.setState({
                carStatus:"Stopped",
                speed:0
            });
        }
    }
    
    render(){
        //const isCarStarted = this.state.isCarStarted;
        //let addButton;
        //let button;
        //addButton=<AddNewCar onClick={this.AddNewCar}/>;
        
        //if(isCarStarted){
         //   button=<StopTheCar onClick={this.onStartOrStop}/>;
    //    }
       // else{
        //    button=<StartTheCar onClick={this.onStartOrStop}/>;
    //    }
        
        return(
            <div className="main-car">
                <span>Car{this.props.carId}</span>
                  <button className="start-stop" onClick={this.startStop}>
                  {this.state.carStatus==="Running"?"Stop":"Start"}
                  </button>
                  <button onClick={this.props.removeCarFromCarsList} id={this.props.carId}>X</button>
                  <div>{"Status:"}{this.state.carStatus==="Running"?this.state.speed>0?`Running with speed ${this.state.speed}KMPH`:"Running":"Stopped" }</div>
                  <button className="accelerate" onClick={this.onAccelerate}>Accelerate</button>
                  <button className="brake" onClick={this.onApplyBrake}>Deaccelerate</button>
            </div>
        );
    }
}


class CarsList extends React.Component{
    constructor(){
        super();
        this.state={
            carList:[carId]
        };
    }
    addCarToCarsList = () => {
        carId = this.state.carList[this.state.carList.length-1];
        carId = isNaN(carId)?0:carId;
        this.setState((state)=>{
            return{
                carList:[...state.carList,++carId]
            }
        });
    }
    removeCarFromCarsList = (event) =>{
        const Index = this.state.carList.findIndex(item=>
          item === Number(event.target.id));
          let remainingCars = this.state.CarsList.filter((item,index)=> 
          index!=Index,
          )
          this.setState({
              carList:remainingCars
          })
    }
    render(){
        return(
            <div>
             <button onClick = {this.addCarToCarsList}>AddCar</button>
            <div>
            {this.state.carList.map((state)=> {
             return <Car key={state} carId={state}
            removeCarFromCarsList={this.removeCarFromCarsList}/>})
            }
        </div>
        </div>
      );
    }
}



//FUNCTIONS//


//function AddNewCar(props){
 //   return <button className="add-button" onClick= {props.click}>Add Car</button>;
//}


function StartTheCar(props){
    return <button className="start-button" onClick={props.onClick}>Start</button>;
}


function StopTheCar(props){
    return <button className="stop-button" onClick={props.onClick}>Stop</button>;
}




//RENDER OPERATION//



ReactDOM.render(
  <CarsList />,
    rootElement
   );*/



//export {Car};




// let speed=10;
/*let carId=1;
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            carStatus:"Stopped",
            speed:0  
        };
        
    }


    accelerate=()=>{
    
        if(this.state.carStatus==="Running")
        {
        this.setState({
          speed: this.state.speed+10
         });
        //  console.log("accelerate",this.state.speed);
        }
    }
    applyBrake=()=>{
        if(this.state.speed>0){
           this.setState({
          speed: this.state.speed-10
         });
        //  console.log("accelerate",this.state.speed);
        }
    }
    
    startStop = (props)=>{
        if(this.state.carStatus==="Stopped"){
        this.setState({
            carStatus:"Running",
            speed:0
        });
        }
        else{
          this.setState({
            carStatus:"Stopped",
            speed:0
        })  ;
        }
    }

    render(){
        return( 
            <div className="main-car"> 
            <span>Car:{this.props.carId} </span>


            <button className="start-stop" onClick={this.startStop} >
            {this.state.carStatus=="Running" ? "Stop": "Start" }
            </button>




            <button onClick= {this.props.removeCarFromCarsList} id={this.props.carId}> X </button>

            <div> {this.state.carStatus==="Running"?  this.state.speed>0 ? `Running with speed ${this.state.speed}`:"Running" :"Stopped" }</div>

        <button onClick={this.accelerate}> Accelerate </button>

         <button onClick={this.applyBrake}> Apply Brake </button>

      </div>
       );
    }
    
}
// ReactDOM.render( <Car/>,document.getElementById("root"));
 class CarsList extends React.Component{
     constructor(){
      super();   
      this.state={
            carList:[carId]
        };
     }
      addCarToCarsList=()=>{
        //   console.log(this.state.carList.length)
          carId = this.state.carList[this.state.carList.length-1];
          carId = isNaN(carId)? 0:carId;
          this.setState((state)=>{
            return {
            carList:[...state.carList,++carId]
            }
          });
      }
      removeCarFromCarsList=(event)=>{
          const  Index= this.state.carList.findIndex(item=>
              item === Number(event.target.id)
          );
// console.log(Index)
          let remainingCars = this.state.carList.filter((item,index)=>
              index!=Index,
          )
          this.setState({
              carList:remainingCars
          })
      }
     render(){
         return(
             <div> 
             <button onClick = {this.addCarToCarsList} >AddCar </button>
            <div> 
            {this.state.carList.map((state)=> {
            // console.log("state",state)
            return <Car key={state} carId={state}
            removeCarFromCarsList={this.removeCarFromCarsList} />}) 
            }
             </div>
              </div>
            );
     }
 }
 ReactDOM.render( <CarsList/>,document.getElementById("root"))*/
