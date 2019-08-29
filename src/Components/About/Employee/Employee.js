import React from 'react';
import './Employee.css';

class Employee extends React.Component {
	render() {
	return (
        <div className="employee">
              <img className="photo" src={this.props.employee.img} alt="Employee"></img>
              <div className="employee-text">
                  <h2 className="employee-name"> {this.props.employee.name}</h2>
                  <p className="employee-about"> {this.props.employee.desc}</p>
              </div>
          </div>
	)}
};

export default Employee;