import React from "react";

import MainMenu from "./components/MainMenu";
import ProfileCard from "./components/ProfileCard";
import { Switch, Route } from "react-router-dom";

import CareerProfile from "./components/menuList/CareerProfile";
import ExitGame from "./components/menuList/ExitGame";
import HeroGallery from "./components/menuList/HeroGallery";
import Highlights from "./components/menuList/Highlights";
import LootBox from "./components/menuList/LootBox";
import Options from "./components/menuList/Options";
import Play from "./components/menuList/Play";
import Social from "./components/menuList/Social";
import Training from "./components/menuList/Training";

const App = () => {
  return (
    <div>
      <ProfileCard />

      <Switch>
        <Route path="/career" exact component={CareerProfile} />
        <Route path="/exit" exact component={ExitGame} />
        <Route path="/gallery" exact component={HeroGallery} />
        <Route path="/highlights" exact component={Highlights} />
        <Route path="/lootbox" exact component={LootBox} />
        <Route path="/options" exact component={Options} />
        <Route path="/play" exact component={Play} />
        <Route path="/social" exact component={Social} />
        <Route path="/training" exact component={Training} />
        <Route path="/" component={MainMenu} />
      </Switch>
    </div>
  );
};

export default App;
