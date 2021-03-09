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
        mess: "& thanks for subscribing! "
    }
    );

    }
 render (){
    return (
        <div>
          
            <p> 
                {this.state.name} is a {this.state.profession}, aged {this.state.age} 
               <br/>
                {this.state.mess}
            </p>
           <button onClick={this.func}>SUBSCRIBE</button>
        
        </div>
    )
  }
}
export default Emp