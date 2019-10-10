import React, { Component } from 'react';
import Profile from './ProfileCard';
import './CSS/menu.css';
import logo from './images/ow-logo.png';

class Menu extends Component {
	render() {
		return (
			<div className="menu">
				{/* header start */}
				<div className="menu-header">
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
					<Profile />
				</div>
				{/* header end */}

				{/* menu list start */}
				<div className="menu-list">
					<ul className="list-items">
						<li className="top-names">PLAY</li>
						<li className="top-names">TRAINING</li>
						<li className="top-names">HERO GALLERY</li>
						<li className="top-names">LOOT BOX</li>
						<li className="bottom-names">
							<a href="https://overwatchleague.com/">OVERWATCH LEAGUE</a>
						</li>
						<li className="bottom-names">HIGHLIGHTS</li>
						<li className="bottom-names">SOCIAL</li>
						<li className="bottom-names">CAREER PROFILE</li>
						<li className="bottom-names">OPTIONS</li>
						<li className="bottom-names">EXIT GAME</li>
					</ul>
				</div>
				{/* menu list end */}
			</div>
		);
	}
}

export default Menu;
