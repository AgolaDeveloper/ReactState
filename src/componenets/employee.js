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
 render (){
    return (
        <div>
            <p> {this.state.name} is a {this.state.profession}, aged {this.state.age} </p>
        </div>
    )
  }
}
export default Emp