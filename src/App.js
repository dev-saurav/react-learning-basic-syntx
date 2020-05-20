import React, { Component } from 'react';
import './App.css';
// import styled from 'styled-components';
import Person from "./Person/Person";
import person from './Person/Person';

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1p solid blue;
//       padding: 8px;
//       cursor: pointer;

//       &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//         color: black;
//       }
// `

class App extends Component {
  //state is only in class that extends in Component
  //or state can be used with functional comp by using react hooks
  state = {
    persons: [
      {
        id: "sdfsa",
        name: "Max",
        age: 28
      },
      {
        id: "ljljj",
        name: "Manu",
        age: 29
      },
      {
        id: "ahthafj",
        name: "laura",
        age: 26
      },
    ],
    otherState: "sone other",
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    //inline style is added in this way
    const style = {
      
    }

    //assign the persons to a variable and then change the value as per the click
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* use a map to define a list */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}

        </div>
      );
      // style.backgroundColor = 'red';
      // //using radium we can do this -->
      // style[':hover'] = {
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Swith Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
