import "./App.scss";
import React, { useState, createContext, useContext } from "react";
import { Context } from "./Store";

import * as GameScene from "./controllers/GameScenes";

function App(props) {
  const [state, dispatch] = useContext(Context);

  const renderSwitch = (param) => {
    console.log(param);
    switch (param.gamestatus) {
      case 'startup':
        return (
          <>
          <GameScene.GameStartScreen/>
          </>
        )
        case 'firstscene':
          return (
            <>
            <GameScene.FirstDialogueScene/>
            </>
          )
      case "mainmenu":
        return (
          <>
            <GameScene.MainMenuScene />
          </>
        );
      case "scene1":
        return (
          <>
            <GameScene.IntroScene />
          </>
        );
      case "battlescreen":
        return (
          <>
          <GameScene.BattleScreen/>
          </>
        );
      case "firstbattle":
        return (
          <>
          <GameScene.FirstBattleScreen/>
          </>
        )
      default:
        return (
          <>
            <GameScene.GameOver />
          </>
        );
    }
  };

  // console.log("State is: " + gameState);
  return <div className="defaultBackground">{renderSwitch(state)}</div>;
}

export default App;
