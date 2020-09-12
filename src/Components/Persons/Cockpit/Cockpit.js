import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  let btnClass = '';
  let assignedClasses = [];

  if (props.showPersons){
    btnClass = classes.Red;
  }

  if (props.persons.length <= 3) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  if (props.persons.length === 0) {
    assignedClasses = []
  }

  return (
    <div className = {classes.Cockpit}>
      <h1 title='Guru'>This is Gururaj</h1>
      {
        props.persons.length > 0
          ? <p className={assignedClasses.join(' ')}>I am working Good</p>
          : null
      }
      <button className={btnClass} onClick={props.clickPersonHandler}>
        Switch name
        </button>
    </div>
  )
}
export default cockpit;