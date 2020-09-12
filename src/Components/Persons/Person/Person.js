import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';

class Person extends Component {
    
    // componentDidMount(){
    //     document.querySelector('input').focus();
    // }
    componentDidUpdate(){
        document.querySelector('input').focus();
    }
    render() {
        return (
            <div className={classes.Person}>
                {
                    this.props.isAuth ?
                        <div>
                            <p onClick={this.props.click}>My name is {this.props.name} and age is {this.props.age}</p>
                            <p>{this.props.children}</p>
                            <input type='text' onChange={this.props.changed} value={this.props.name} />
                        </div>
                        : <p>Please Login</p>
                }
            </div>
        )
    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default Person;