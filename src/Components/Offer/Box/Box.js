import React from 'react';
import './Box.css';

class Box extends React.Component {
    displayBox() {
        if (this.props.box.isNewOffer) return (
        <div className="box-new">
                <p>{this.props.box.offer}</p>
            <p>Nowość!</p>
        </div> ) 
        else { return (
            <div className="box-content">
                {this.props.box.offer}
            </div>)
        }
    }
	render() {
	return (
        <div className="box-content">
            <div>{this.displayBox()}</div>
        </div>
        
	)}
};

export default Box;