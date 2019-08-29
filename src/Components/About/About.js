import React from 'react';
import './About.css';
import Employee from './Employee/Employee';
import pic1 from './img/pic1.png';
import pic2 from './img/pic2.jpg';

class About extends React.Component {
	constructor(props) {
    super(props);
    
    this.employees = [
      {
        name: 'Employee One',
        img: pic1,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        name: 'Employee Two',
        img: pic2,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan urna in tortor vulputate, vitae scelerisque massa ullamcorper.'
      },
      {
        name: 'Employee Three',
        img: pic1,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan urna in tortor vulputate, vitae scelerisque massa ullamcorper. Praesent urna erat, aliquet eu rhoncus eget, cursus in orci.'
      },
      
    ]
  }
  
	render() {
	return (
    <section id="about">
      <div className="container about-container">
          <div className="about-header">
              <h1 className="employees">Nasi specjaliści</h1>
          </div>

          {this.employees.map((emp, i) => {
            return <Employee employee={emp} key={i}></Employee>
          })}

      </div>
    </section>
	)}
};

export default About;