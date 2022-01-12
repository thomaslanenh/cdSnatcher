import "./App.scss";
import MessageBox from "./components/MessageBox";
import React, { useState, createContext, useContext } from "react";
import { Context } from "./Store";
import Card from './components/Card';
import Intro from './components/scenes/IntroCutscene';

function App(props) {
  const [state, dispatch] = useContext(Context);

  const renderSwitch = (param) => {
    console.log(param);
    switch (param.gamestatus) {
      case "startgame":
        return (
          <>
            <MessageBox message="START GAME" />
            <Card/>
          </>
        );
      case "mainmenu":
        return (
          <>
            <MessageBox message="CD SNATCHER" />
          </>
        );
      case "scene1":
        return (
          <>
            <Intro/>
          </>
        )
      default:
        return (
          <>
            <p>Game Over</p>
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
