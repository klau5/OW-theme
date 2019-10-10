import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './CSS/menu.css';
import logo from './images/ow-logo.png';

import CareerProfile from './menuList/CareerProfile';
import ExitGame from './menuList/ExitGame';
import HeroGallery from './menuList/HeroGallery';
import Highlights from './menuList/Highlights';
import LootBox from './menuList/LootBox';
import Options from './menuList/Options';
import Play from './menuList/Play';
import Social from './menuList/Social';
import Training from './menuList/Training';

const MainMenu = () => {
	return (
		<div className="menu">
			{/* header start */}
			<div className="menu-header">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
			</div>
			{/* header end */}

			{/* menu list start */}
			<Router>
				<div className="menu-list">
					<nav>
						<ul className="list-items">
							<li className="top-names">
								<Link to="/play">PLAY</Link>
							</li>
							<li className="top-names">
								<Link to="/training">TRAINING</Link>
							</li>
							<li className="top-names">
								<Link to="/gallery">HERO GALLERY</Link>
							</li>
							<li className="top-names">
								<Link to="/lootbox">LOOT BOX</Link>
							</li>
							<li className="bottom-names">
								<Link to="">OVERWATCH LEAGUE</Link> {/* add OWL href */}
							</li>
							<li className="bottom-names">
								<Link to="/highlights">HIGHLIGHTS</Link>
							</li>
							<li className="bottom-names">
								<Link to="/social">SOCIAL</Link>
							</li>
							<li className="bottom-names">
								<Link to="/career">CAREER PROFILE</Link>
							</li>
							<li className="bottom-names">
								<Link to="/options">OPTIONS</Link>
							</li>
							<li className="bottom-names">
								<Link to="/exit">EXIT GAME</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route path="/career" component={CareerProfile} />
						<Route path="/exit" component={ExitGame} />
						<Route path="/gallery" component={HeroGallery} />
						<Route path="/highlights" component={Highlights} />
						<Route path="/lootbox" component={LootBox} />
						<Route path="/options" component={Options} />
						<Route path="/play" component={Play} />
						<Route path="/social" component={Social} />
						<Route path="/training" component={Training} />
					</Switch>
				</div>
			</Router>
			{/* menu list end */}
		</div>
	);
};

export default MainMenu;
