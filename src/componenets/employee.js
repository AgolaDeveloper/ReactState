import React, { Component } from 'react'
import './employee.css'

class Emp extends Component
{
    constructor(){
        super()
    
        this.state={
            name: "Agola",
            age: 23,
            profession: "Software Developer",
            mess: " "
        }
    };
    
   func=() => {
    this.setState(
        {name: "Owino Tene",
        mess: "& thanks for subscribing! ",
        mes: ""
    }
    );
 }

    changem=(e)=>{
        var text=e.target.value;
        this.setState(
            {mes:"Your message has " +text.length +" characters"}
        );
    }
 render (){
    return (
        <div>

            <label>Enter message: </label>
            <input onChange={this.changem}></input>
          
            <p> 
                {this.state.name} is a {this.state.profession}, aged {this.state.age} 
               <br/>
                {this.state.mess}
            </p>
           <button onClick={this.func}>SUBSCRIBE</button>

           <p>{this.state.mes}</p>
        
        </div>
    )
  }
}
export default Emp