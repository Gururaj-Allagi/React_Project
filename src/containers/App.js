import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Persons/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: 'assd', name: 'Guru', age: 26 },
      { id: 'asccsd', name: 'Guru', age: 26 },
      { id: 'adsfs', name: "Jagu", age: 25 },
      { id: 'asssdd', name: 'Guru', age: 26 },
      { id: 'adsadsfdfs', name: "Jagu", age: 25 }
    ],
    name: 'test',
    showPersons: false,
    Authenticated: false
  }

  isAuthenticatedHandler = () => {
    let doestAuth = this.state.isAuthenticated
    this.setState({
      Authenticated: !doestAuth
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons] // euqalent to .slice()
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  render() {

    let persons = null;

    if (this.state.showPersons ) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} 
            isAuthenticated={this.state.Authenticated}
            />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length} 
          isAuthenticated = {this.isAuthenticatedHandler}
          clickPersonHandler = {this.togglePersonHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;