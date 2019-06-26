import React, { Component } from 'react'
import './App.css'

const colorArray = [ "white", "green", "blue", "yellow", "red", "purple", "orange" ]

class Color extends Component {
    constructor(props){
        super(props)
        this.state = {
         color: "Pink",
         id: 0
        }
    }
    handleChange = () => {
        var { color, id } = this.state
        id++;
        color = colorArray[id]

        this.setState({ color, id })
    }

    render(){
        const cssArray = [ {backgroundColor: this.state.color} ]
        return (
            <div>
                <button style={cssArray} onClick = {this.handleChange}>Change me!</button>
            </div>
        );
    }
}
export default Color;
