import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {
	render() {
	return (
		<nav>
			<div className="container nav-container">
				<a className="name" href="#home">Nazwa firmy</a>
				<div className="menu-right">
					<ul className="nav-links">
						<li><a href="#about">O nas</a></li>
						<li><a href="#offer">Oferta</a></li>
						<li><a>Kontakt</a></li>
					</ul>
					<div className="bars">
						<FontAwesomeIcon icon={faBars} />
					</div>
				</div>
			</div>  
		</nav>
	)}
};

export default Nav;