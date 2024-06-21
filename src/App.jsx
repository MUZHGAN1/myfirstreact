import React, {useState} from "react"
import "./App.css";


import Greeting from "./Greeting"
const App =() => {

// let counter = 0;
const [counter, setCounter] = useState(0);

const changecounter = () =>{
  console.log("counter is",counter);
  setCounter (counter +1)
};


// const decrementCounter = () => {
//   setCounter(counter - 1);
// };







  // 
  return (
    <div style={{backgroundColor:(counter < 5)?"green": "blue"}}>

     <Greeting name="Muzhgan"city="München"/>
     <Greeting name="Mina"city="Hamburg"/>
     <Greeting name="Alex"city="Berlin"/>
    
     
     <button onClick= {changecounter}>Increase</button>
     <p>Counter {counter}</p>
     <button onClick= {changecounter}>decrementCount</button>
     <button onClick= {changecounter}>setToZero</button>
    
     </div>
  
  );

}
export default App;
