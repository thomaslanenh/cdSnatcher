import "./App.scss";
import MessageBox from "./components/MessageBox";
import React, { useState, createContext, useContext } from "react";
import { Context } from "./Store";
import Card from './components/Card';
import Intro from './components/scenes/IntroCutscene';

import * as GameScene from './controllers/GameScenes';

function App(props) {
  const [state, dispatch] = useContext(Context);

  const renderSwitch = (param) => {
    console.log(param);
    switch (param.gamestatus) {
      case "startgame":
        return (
          <>
            <GameScene.StartGame/>
          </>
        );
      case "mainmenu":
        return (
          <>
            <GameScene.MainMenu/>
          </>
        );
      case "scene1":
        return (
          <>
            <GameScene.IntroScene/>
          </>
        )
      default:
        return (
          <>
          <GameScene.GameOver/>
          </>
        );
    }
  };

  // console.log("State is: " + gameState);
  return (
    <div className="defaultBackground">
      {renderSwitch(state)}
    </div>
  );
}

export default App;
