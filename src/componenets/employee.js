import React, { Component } from 'react'
import './employee.css'

class Emp extends Component
{
    constructor(){
        super()
    
        this.state={
            name: "Agola",
            age: 23,
            profession: "Software Developer"
        }
    }
    // document.getElementById("btn").addEventListener("click", func);
   func() {
    this.setState({name: "Owino Tene"});

    }
 render (){
    return (
        <div>
          
            <p> {this.state.name} is a {this.state.profession}, aged {this.state.age} </p>
           <button onClick={this.func}>SUBSCRIBE</button>
        
        </div>
    )
  }
}
export default Emp