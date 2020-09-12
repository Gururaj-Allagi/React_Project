import React, { useEffect} from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

  useEffect(()=> {
    console.log('cockpit')
    //http request can be writen here
    setTimeout(()=> {
      alert('Gururaj')
    },1000);
  }, []);

  let btnClass = '';
  let assignedClasses = [];

  if (props.showPersons){
    btnClass = classes.Red;
  }

  if (props.personsLength <= 3) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  if (props.personsLength === 0) {
    assignedClasses = []
  }

  return (
    <div className = {classes.Cockpit}>
      <h1 title='Guru'>This is Gururaj</h1>
      {
        props.personsLength > 0
          ? <p className={assignedClasses.join(' ')}>I am working Good</p>
          : null
      }
      <button className={btnClass} onClick={props.clickPersonHandler}>
        Switch name
        </button>
    </div>
  )
}
export default React.memo(cockpit);