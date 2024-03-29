import { useContext, useState } from "react";
import {Context} from '../Store';
import MainMenu from "../components/scenes/MainMenu";
import Card from '../components/Card';
import Intro from "../components/scenes/IntroCutscene";
import BattleScene from '../components/BattleScene';
import FirstBattle from "../components/scenes/FirstBattle";
import StartUpScreen from "../components/scenes/StartUpScreens";
import FirstScene from "../components/scenes/FirstScene";
import TestBattle from '../components/TestBattle';

export const GameStartScreen = () => {
  return <StartUpScreen/>
}

export const MainMenuScene = () => {
  return <MainMenu message="CD SNATCHER" />;
};

export const IntroScene = () => {
  return <Intro />;
};

export const BattleScreen = (params) => {
  return <>
    <BattleScene enemy={params.enemy} enemyhealth={params.enemyhealth} nextscene={params.nextscene}/>
  </>;
};

export const FirstDialogueScene = () => {
  return <FirstScene />
};

export const TestBattleScreen = (params) => {
  return <TestBattle/>
};

export const GameOver = () => {
    return (
        <p>Game Over</p>
    )
};

export const FirstBattleScreen = () => {
  return (
      <FirstBattle/>
  )
};