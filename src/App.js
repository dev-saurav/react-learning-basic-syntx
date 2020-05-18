import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  //state is only in class that extends in Component
  //or state can be used with functional comp by using react hooks
  state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Manu",
        age: 29
      },
      {
        name: "laura",
        age: 26
      },
    ],
    otherState: "sone other"
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    //should not mutatie the value directly
    //insted usde a special method
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: "Manu",
          age: 29
        },
        {
          name: "laura",
          age: 2
        },
      ],
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {
          name: "max",
          age: 28
        },
        {
          name: event.target.value,
          age: 29
        },
        {
          name: "laura",
          age: 2
        },
      ],
    })
  }

  render() {
    //inline style is added in this way
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1p solid blue',
      padding: '8px',
      cursor: "pointer"
    }

    return (
      <div className="App">
        <button style={style} onClick={() => this.switchNameHandler("Maximillian")}>Swith Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          //the bind is the better way of using this
          age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "maxi bhi")}
          changed={this.nameChangedHandler}>My Hobbies: racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <h1>Hi, I'm a react app</h1>
        <p>this is working</p>
      </div>
    );
  }
}

export default App;
