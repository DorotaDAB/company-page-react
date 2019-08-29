import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {

	render() {
	return (
    <footer>
        <div className="container footer-container">
            <div className="worning">
                Nazwa Firmy - wszelkie prawa zastrzeżone, 2019
            </div>  
            <ul className="menu-right">
                <li><FontAwesomeIcon icon={faFacebookSquare} /></li>   
                <li><FontAwesomeIcon icon={faInstagram} /></li> 
            </ul>
        </div>  
    </footer>
	)}
};

export default Footer;