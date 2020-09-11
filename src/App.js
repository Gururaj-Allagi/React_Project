import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'assd', name: 'Guru', age: '26' },
      { id: 'adsfs', name: "Jagu", age: '25' },
      { id: 'asssdd', name: 'Guru', age: '26' },
      { id: 'adsadsfdfs', name: "Jagu", age: '25' }
    ],
    name: 'test',
    showPersons: false
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
    let btnClass = '';
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      )
      btnClass=classes.Red
    }
    let assignedClasses = [];
    if (this.state.persons.length <= 3) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    if (this.state.persons.length === 0) {
      assignedClasses = []
    }

    return (
        <div className={classes.App}>
          <h1 title='Guru'>This is Gururaj</h1>
          {
            this.state.persons.length > 0
              ? <p className={assignedClasses.join(' ')}>I am working Good</p>
              : null
          }
          <button className={btnClass} onClick={this.togglePersonHandler}>
            Switch name
        </button>
          {persons}
        </div>
    );
  }
}

export default App;