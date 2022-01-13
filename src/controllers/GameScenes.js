import { useContext, useState } from "react";
import {Context} from '../Store';
import MessageBox from "../components/MessageBox";
import Card from '../components/Card';
import Intro from "../components/scenes/IntroCutscene";
import BattleScene from '../components/BattleScene';
import FirstBattle from "../components/scenes/FirstBattle";

export const MainMenu = () => {
  return <MessageBox message="CD SNATCHER" />;
};

export const IntroScene = () => {
  return <Intro />;
};

export const BattleScreen = (params) => {
  return <>
    <BattleScene enemy={params.enemy}/>
  </>;
};

export const StartGame = () => {
  return (
    <>
      <MessageBox message="START GAME" />
    </>
  );
};

export const GameOver = () => {
    return (
        <p>Game Over</p>
    )
}

export const FirstBattleScreen = () => {
  return (
      <FirstBattle/>
  )
}