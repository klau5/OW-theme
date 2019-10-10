import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import MainMenu from './components/MainMenu';
import CareerProfile from './components/Menu Components/CareerProfile';
import ExitGame from './components/Menu Components/ExitGame';
import HeroGallery from './components/Menu Components/HeroGallery';
import Highlights from './components/Menu Components/Highlights';
import LootBox from './components/Menu Components/LootBox';
import Options from './components/Menu Components/Options';
import Play from './components/Menu Components/Play';
import Social from './components/Menu Components/Social';
import Training from './components/Menu Components/Training';
import ProfileCard from './components/ProfileCard';

const App = () => {
	return (
		<div>
		<ProfileCard />
			<BrowserRouter>
				<div>
					<Route path="/" exact component={MainMenu} />
					<Route path="/career" exact component={CareerProfile} />
					<Route path="/exit" exact component={ExitGame} />
					<Route path="/gallery" exact component={HeroGallery} />
					<Route path="/highlights" exact component={Highlights} />
					<Route path="/lootbox" exact component={LootBox} />
					<Route path="/options" exact component={Options} />
					<Route path="/play" exact component={Play} />
					<Route path="/social" exact component={Social} />
					<Route path="/training" exact component={Training} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
